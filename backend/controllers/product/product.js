import express from "express";
import asyncHandler from "express-async-handler";
import {prisma} from "../../prisma/utils.js"; 

export const createProduct = asyncHandler(async(req,res)=>{
  const {
    title,
    description,
    description2,
    description3,
    descriptionHero,
    adcopyFb1,
    adcopyFb2,
    adcopy1,
    adcopy2,
    adcopy3,
    creative1,
    creative2,
    free,
    priceOfGoods,
    sellPrice,
    aliexpressLink,
    cjdropshippingLink,
    competitorShop,
    productAge,
    popullarity,
    competitivness,
    bestPlatform,
    category,
    keywords,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  } = req.body;
  try {
    const creativeGot =  [];
    const imagesGot = [];
    req.images.map((creative)=>{
      if(creative.endsWith(".mov")||creative.endsWith(".mov")){
        creativeGot.push(creative);
      }
    })
    req.images.map((image)=>{
      if(image.endsWith(".jpg")||image.endsWith(".png") || image.endsWith(".jpeg")){
        imagesGot.push(image);
      }
    })
    const newProduct = await prisma.product.create({
       data:{
        ...req.body,
        creative1:creativeGot[0],
        creative2:creativeGot[1],
        image1:imagesGot[0],
        image2:imagesGot[1],
        image3:imagesGot[2],
        image4:imagesGot[3],
        image5:imagesGot[4],
        image6:imagesGot[5],
        image7:imagesGot[6],
        image8:imagesGot[7],
        userId:req.user.id,
       }
        
    });

    res.status(200).json(newProduct);
    
  } catch (error) {
     return res.status(403).json({
    success: false,
    message: error.message,
    });
  }
});

export const fetchAllProducts = asyncHandler(async (req, res) => {
  const allProducts = await prisma.product.findMany({
    include: {
      user: true,   // equivalent of populate("user")
    },
    orderBy: {
      createdAt: "desc",   // equivalent of sort({ createdAt: -1 })
    },
  });

  res.status(200).json(allProducts);
});

export const fetchFreeproducts = asyncHandler(async(req,res)=>{
  try {
    const fetchFreeproducts = await prisma.product.findMany({
      where:{free:true},
      include: {
      user: true,   // equivalent of populate("user")
    },
    orderBy: {
      createdAt: "desc",   // equivalent of sort({ createdAt: -1 })
    },
  });
  res.status(200).json(fetchFreeproducts);

  } catch (error) {
    return res.status(403).json({
    success: false,
    message: error.message,
    });
  }
});


export const fetchPaidProd = asyncHandler(async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      free: false,
    },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  res.status(200).json(products);
});

export const fetchTiktokProd = asyncHandler(async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      free: false,
      bestPlatform: "Tiktok",
    },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  res.status(200).json(products);
});

export const fetchGoogleProd = asyncHandler(async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      free: false,
      bestPlatform: "Google",
    },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  res.status(200).json(products);
});

export const fetchFacebookProd = asyncHandler(async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      free: false,
      bestPlatform: "Facebook",
    },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  res.status(200).json(products);
});

export const fetchSingleProd = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      user: true,
    },
  });

  res.status(200).json(product);
});

export const fetchSingleProdFree = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await prisma.product.findFirst({
    where: {
      id,
      free: true,
    },
    include: {
      user: true,
    },
  });

  res.status(200).json(product);
});

export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = req.user;

  const updatedProduct = await prisma.product.update({
    where: { id },
    data: {
      ...req.body,
      userId: user?.id,   // important: use userId not user
    },
    include: {
      user: true,
    },
  });

  res.status(200).json(updatedProduct);
});

export const deleteProductSingle = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedProduct = await prisma.product.delete({
    where: { id },
  });

  res.status(200).json(deletedProduct);
});

export const deleteAllProducts = asyncHandler(async (req, res) => {
  const result = await prisma.product.deleteMany({});

  res.status(200).json(result);
});