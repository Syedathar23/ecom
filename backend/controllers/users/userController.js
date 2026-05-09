// controllers/authController.js   ← ESM version

import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {prisma} from "../../prisma/utils.js"; 
import Stripe from "stripe";
import dotenv from "dotenv";
import sgMail from '@sendgrid/mail'
import { error } from "console";
import { getSystemErrorMessage } from "util";
import { createAccountVerificationToken, createPasswordResetToken } from "../../token/authtoken.js";

dotenv.config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Register User – ESM + Prisma + PostgreSQL
export const registerUser = asyncHandler(async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  // 1. Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email: email.toLowerCase() },
  });

  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: "User already exists! Please login.",
    });
  }

  // 2. Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // 3. Create Stripe customer
  const stripeCustomer = await stripe.customers.create({
    email: email.toLowerCase(),
    name: `${firstName} ${lastName}`,
  });

  // 4. Create user in DB
  const newUser = await prisma.user.create({
    data: {
      email: email.toLowerCase(),
      password: hashedPassword,
      firstName,
      lastName,
      stripe_customer_id: stripeCustomer.id,
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      stripe_customer_id: true,
      role: true,
      createdAt: true,
      // password automatically excluded
    },
  });

  // 5. Generate JWT
  const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "12h",
  });

  // 6. Send response + secure cookie
  res
    .status(201)
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 12 * 60 * 60 * 1000, // 12 hours
    })
    .json({
      success: true,
      message: "User registered successfully",
      token,
      user: newUser,
    });

   

    const verificationToken = await createAccountVerificationToken(newUser.id);

    // NEW: Send verification email (example with SendGrid)
    const verificationLink = `http://localhost:3000/verify?token=${verificationToken}`;

    const msg = {
      to: newUser.email,
      from: 'syedathar23m@gmail.com', // your verified sender
      subject: 'Verify Your Email for SkillBolt',
      text: `Click here to verify your email: ${verificationLink}`,
      html: `<p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`,
    };

    await sgMail.send(msg);

    // Then send response
    res.status(201).json({ success: true, message: "User registered! Check your email to verify." });

});

export const userLogin = asyncHandler(async (req,res)=>{
  try{
    const { email, password } = req.body;  
    
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const emailExists = await prisma.user.findUnique({where: {email:email}});
  
    if(!emailExists){
      throw new Error("User does not exist! Please sign up ");
    }
  
    const user = await prisma.user.findUnique({where:{email:email.toLowerCase()}})
    const comparePass = await bcrypt.compare(password,user.password);
  
    if(!comparePass){
      throw new Error("Password Does not Match!");
    }
  
    const data = {
      id:user.id,
    }
  
    const token = jwt.sign(data,process.env.JWT_SECRET_KEY,{
      expiresIn:"12h",
    });
  
    user.password=undefined;
  
    res.status(200).cookie("token",token,{
      expires: new Date(Date.now()),
      sameSite:"None",
      secure: true, 
      maxAge:12 * 60 * 60 * 1000
    }).json({
      success:true,
      token,
      user
    })
  }catch(Error){
    return res.status(403).json({
    success: false,
    message: Error.message,
    });
  }
})
// error in authentication
export const testController = asyncHandler(async(req,res)=>{
  // const id = prisma.user.id;
  const id = req.user?.id;
  try {
    const user = await prisma.user.findUnique({where : {id : id}});
    res.status(200)
    .json({
      success:"true",
      user
    })
  } catch (error) {
    res.status(401).json({
      success:false,
      message:error.message,
    });
  }
})

export const fetchAllUsers = asyncHandler(async(req,res)=>{
  try {
    const user = await prisma.user.findMany();
    res
    .status(200)
    .json({
      success:true,
      user
    })
  } catch (error) {
    res.status(401).json({
      success:false,
      message:error.message,
    });
  }
});

export const stripePrices = asyncHandler(async(req,res)=>{
  try {
    const prices = await stripe.prices.list();
    const pricesData = prices.data;
    res.status(200).json({
      success:true,
      pricesData,
    })
  } catch (error) {
    res.status(401).json({
      success:false,
      message:error.message,
    });
  }
});
// error in jwt token verification
export const updatePassword = asyncHandler(async (req,res) => {
    const {password} = req.body;
    const userId = req.user?.id;
    if(!userId){
      return res.status(401).json({
        success:false,
        message:"User not authenticated",
      });
    }
    try {
      const user = await prisma.user.findUnique({where:{id:userId}});
      if(!user){
        throw new Error("User not found");
      }
      const comparePassword = await bcrypt.compare(password,user.password);
      if(comparePassword){
        throw new Error("New password cannot be same as old password");
      }else{
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password,salt);
        await prisma.user.update({
          where:{id:userId},
          data:{password:encryptedPassword}
      });
      res.status(200).json({
        success:true,
        message:"Password updated successfully"
      });
      }
        
    } catch (error) {
      res.status(401).json({
      success:false,
      message:error.message,
    });
        
  }
});

export const resetpassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User with this email does not exist.",
      });
    }
    // Generate password reset token
    const resetToken = await createPasswordResetToken(user.id); 
    // Send password reset email (example with SendGrid)
    const resetLink = `http://localhost:3000/resetpassword?token=${resetToken}`;
    const msg = {
      to: user.email,
      from: 'syedathar23m@gmail.com',
      subject: 'Reset Your Password for SkillBolt',
      text: `Click here to reset your password: ${resetLink}`,
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    };
    await sgMail.send(msg);
    res.status(200).json({
      success: true,
      message: "Password reset email sent. Please check your inbox.",
    });


  } catch (error) {
    res.status(401).json({
      success:false,
      message:error.message,
    });
  }
});

export const userPasswordResetAfterClick = asyncHandler(async (req,res)=>{
  const {token,newpassword} = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        passwordResetToken: hashedToken,
        passwordResetExpires: { gt: new Date() }
      }
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired password reset token.",
      });
    }
    if(user){
      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(newpassword,salt);
      await prisma.user.update({
        where:{id:user.id},
        data:{password:encryptedPassword,
        passwordResetToken: null,
        passwordResetExpires: null,
      }
    });
      // const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    }
    
  } catch (error) {
    res.status(401).json({
      success:false,
      message:error.message,
    });
  }
});

export const verifyAccount = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try{
    const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User with this email does not exist.",
      });
    }
    if(user){
      const verificationToken = await createAccountVerificationToken(user.id);
      // NEW: Send verification email (example with SendGrid)
      const verificationLink = `http://localhost:3000/verify?token=${verificationToken}`;
      const msg = {
        to: user.email,
        from: 'syedathae23m@gmail.com',
        subject: 'Verify Your Email for SkillBolt',
        text: `Click here to verify your email: ${verificationLink}`,
        html: `<p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`,
      };
      await sgMail.send(msg);
      res.status(200).json({
        success: true,
        message: "Verification email sent. Please check your inbox.",
      });
    }
  }catch (error) {
    res.status(401).json({
      success:false,
      message:error.message,
    });
  }
});

export const verifyAccountAfterClick = asyncHandler(async (req,res)=>{
  const {token} = req.body;
  try {
      const hashedToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
    const user = await prisma.user.findFirst({where:{
      accountVerificationToken: hashedToken,
      accountVerificationTokenExpires: { gt: new Date() }
    }});  
      if (!user) {
        return res.status(400).json({
          success: false, 
          message: "Invalid or expired account verification token.",
        });
      }
      if(user){
        await prisma.user.update({
          where:{id:user.id},
          data:{
            isVerified:true,
            accountVerificationToken: null,
            accountVerificationTokenExpires: null,
          }
        });
        res.status(200).json({
          success:true,
          message:"Account verified successfully",
        });
      }
    } catch (error) {
      res.status(401).json({
      success:false,
      message:error.message,
    });
  }
});

export const updateUserField = asyncHandler( async(req,res)=>{
  const id = req.user.id;
  try {
    const user = await prisma.user.update({
      where: {id},
      data: req.body,
      select: {
        id: true,
        firstName: true,
        lastName:true,
        email: true,
        updatedAt: true,
      },
    },{...req.body});

    if(!user) throw new Error("No user Found");
    const updatedUser = await prisma.user.findFirst({where: {id}});

    res.status(200).json({
      success: true,
      data: updatedUser,
    });
    
  } catch (error) {
    res.status(401).json({
      success:false,
      message:error.message,
    });
  }
});


export const saveProduct = asyncHandler(async(req,res)=>{
  const productId = Number(req.body.productId);
  const userId = req.user.id;
  if (!productId) {
    res.status(400);
    throw new Error("Product ID is required");
  }

   const isSaved = await prisma.savedProduct.findFirst({
    where: {
      userId,
      productId,
    },
  });
  
  if(isSaved) throw new Error("Product already saved"); 

  await prisma.savedProduct.update({
    data: {
      userId,
      productId,
    },
  });
  
  res.status(200).json({
    success: true,
    message: "Product saved successfully",
  });
});

export const unsaveProducts = asyncHandler(async(req,res)=>{
   const productId = Number(req.body.productId);
  const userId = req.user.id;

  if (!productId) {
    res.status(400);
    throw new Error("Product ID is required");
  }

  const isSaved = await prisma.savedProduct.findFirst({
    where: {
      userId,
      productId,
    },
  });

  if (!isSaved) {
    res.status(404);
    throw new Error("Product not found in saved list");
  }

  await prisma.savedProduct.delete({
    where: {
      id: savedItem.id,
    },
  });

  res.status(200).json({
    success: true,
    message: "Product unsaved successfully",
  });
});

export const createSubWindow = asyncHandler(async (req, res) => {
  const id = req.user.id; 

  try {
    const targetUser = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        stripe_customer_id: true,
      },
    });

    if (!targetUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: req.body.priceId,
          quantity: 1,
        },
      ],
      customer: targetUser.stripe_customer_id,
      success_url: process.env.APP_STRIPE_SUCCESS_URL,
      cancel_url: process.env.APP_STRIPE_CANCEL_URL,
    });

    res.status(200).json({
      success: true,
      url: session.url, 
    });

  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
});

export const subStausUpdate =  asyncHandler(async(req,res)=>{
  const id = req.user.id;
  const targetUser = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        stripe_customer_id: true,
      },
    });
    if (!targetUser) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
    }
  const customerid = await targetUser.stripe_customer_id;
  if (!customerid) {
    return res.status(400).json({
      success: false,
      message: "Stripe customer ID not found",
    });
  }
  try {
      const substatus = await stripe.subscriptions.list({
      customer: customerid,
      status: "all",
      expand: ["data.default_payment_method"],
    });
    await prisma.user.update({
      where: { id },
      data: {
        subscriptions: substatus.data,
        role: "subscriber",
      },
    });

    res.status(200).json({
      success: true,
      message:" Congratulations! You've become a Subscriber"
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
});

export const updateSubAfterCancel = asyncHandler(async (req, res) => {
  const id = req?.user?._id;

  const targetUser = await User.findById(id);

  if (!targetUser || !targetUser.stripe_customer_id) {
    return res.status(400).json({
      success: false,
      message: "Stripe customer ID not found",
    });
  }

  const customerId = targetUser.stripe_customer_id;

  try {
    const subStatus = await stripe.subscriptions.list({
      customer: customerId,
      status: "all",
      expand: ["data.default_payment_method"],
    });

    if (!subStatus.data.length) {
      return res.status(200).json({
        message: "No subscriptions found",
      });
    }

    const subscription = subStatus.data[0];

    const hasCanceled = subscription.cancel_at_period_end;
    const periodEnd = subscription.current_period_end;

    const currentDate = new Date();
    const endDate = new Date(periodEnd * 1000);

    const hasEnded = currentDate > endDate;

    let updateData = {
      subscriptions: subStatus.data,
    };

    if (hasCanceled && hasEnded) {
      updateData.role = "freeuser";
    } else if (hasCanceled && !hasEnded) {
      updateData.isSubCanceled = "ActiveTillEnd";
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    return res.status(200).json(updatedUser);

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export const customerPortal = asyncHandler(async (req, res) => {
  const id = req.user.id;

  const targetUser = await prisma.user.findUnique({
    where: { id },
    select: {
      stripe_customer_id: true,
    },
  });

  if (!targetUser || !targetUser.stripe_customer_id) {
    return res.status(400).json({
      success: false,
      message: "Stripe customer ID not found",
    });
  }

  const customerId = targetUser.stripe_customer_id;

  try {
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: process.env.APP_STRIPE_HOME_URL,
    });

    console.log(portalSession);

    return res.status(200).json({
      success: true,
      url: portalSession.url,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export const renewSub = asyncHandler(async (req, res) => {
  const id = req?.user?._id;

  const targetUser = await User.findById(id);

  if (!targetUser || !targetUser.stripe_customer_id) {
    return res.status(400).json({
      success: false,
      message: "Stripe customer ID not found",
    });
  }

  const customerId = targetUser.stripe_customer_id;

  try {
    const subStatus = await stripe.subscriptions.list({
      customer: customerId,
      status: "all",
    });

    if (!subStatus.data.length) {
      return res.status(200).json({
        message: "No subscriptions found",
      });
    }

    const subscription = subStatus.data[0];

    let updateData = {
      subscriptions: subStatus.data,
    };

    if (subscription.status === "active") {
      updateData.role = "subscriber";
      updateData.isSubCanceled = "Active";
    } else {
      updateData.role = "freeuser";
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    return res.status(200).json(updatedUser);

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});