import asyncHandler from "express-async-handler";
import { query } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Admin Login
export const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }

  const userResult = await query("SELECT * FROM users WHERE email = $1", [email.toLowerCase()]);
  const user = userResult.rows[0];

  if (!user || user.role !== 'admin') {
    return res.status(403).json({ success: false, message: "Invalid credentials or not an admin" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET_KEY, {
    expiresIn: "12h",
  });

  const { password: _, ...adminData } = user;

  res.status(200).json({
    success: true,
    token,
    admin: adminData
  });
});

// Dashboard Stats
export const getDashboardStats = asyncHandler(async (req, res) => {
  const ordersCount = await query("SELECT COUNT(*) FROM orders");
  const totalRevenue = await query("SELECT SUM(totalamount) FROM orders WHERE paymentstatus = 'Paid' OR paymentstatus = 'Completed'");
  const productsCount = await query("SELECT COUNT(*) FROM products");
  const usersCount = await query("SELECT COUNT(*) FROM users");
  
  const recentOrders = await query(`
    SELECT o.*, u.firstname, u.lastname 
    FROM orders o 
    JOIN users u ON o.userid = u.id 
    ORDER BY o.createdat DESC LIMIT 10
  `);

  const statusBreakdown = await query(`
    SELECT status, COUNT(*) as count 
    FROM orders 
    GROUP BY status
  `);

  res.status(200).json({
    success: true,
    stats: {
      totalOrders: parseInt(ordersCount.rows[0].count),
      totalRevenue: parseFloat(totalRevenue.rows[0].sum || 0),
      totalProducts: parseInt(productsCount.rows[0].count),
      totalUsers: parseInt(usersCount.rows[0].count),
      recentOrders: recentOrders.rows,
      statusBreakdown: statusBreakdown.rows
    }
  });
});

// Product Management
export const getAllProductsAdmin = asyncHandler(async (req, res) => {
  const result = await query("SELECT * FROM products ORDER BY createdat DESC");
  res.status(200).json({ success: true, products: result.rows });
});

export const createProduct = asyncHandler(async (req, res) => {
  const { title, description, sellprice, category, image1, stock } = req.body;
  const result = await query(
    `INSERT INTO products (title, description, sellprice, category, image1, createdat, updatedat) 
     VALUES ($1, $2, $3, $4, $5, NOW(), NOW()) RETURNING *`,
    [title, description, sellprice, category, image1]
  );
  res.status(201).json({ success: true, product: result.rows[0] });
});

export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, sellprice, category, image1 } = req.body;
  const result = await query(
    `UPDATE products SET title = $1, description = $2, sellprice = $3, category = $4, image1 = $5, updatedat = NOW() 
     WHERE id = $6 RETURNING *`,
    [title, description, sellprice, category, image1, id]
  );
  if (result.rows.length === 0) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }
  res.status(200).json({ success: true, product: result.rows[0] });
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await query("DELETE FROM products WHERE id = $1", [id]);
  res.status(200).json({ success: true, message: "Product deleted" });
});

// Order Management
export const getAllOrdersAdmin = asyncHandler(async (req, res) => {
  const result = await query(`
    SELECT o.*, u.firstname, u.lastname, u.email, 
           a.address_line as address, a.city, a.state, a.pincode
    FROM orders o 
    JOIN users u ON o.userid = u.id 
    LEFT JOIN addresses a ON o.addressid = a.id
    ORDER BY o.createdat DESC
  `);
  res.status(200).json({ success: true, orders: result.rows });
});


export const updateOrderStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const result = await query(
    "UPDATE orders SET status = $1, updatedat = NOW() WHERE id = $2 RETURNING *",
    [status, id]
  );
  if (result.rows.length === 0) {
    return res.status(404).json({ success: false, message: "Order not found" });
  }
  res.status(200).json({ success: true, order: result.rows[0] });
});

// User Management
export const getAllUsersAdmin = asyncHandler(async (req, res) => {
  const result = await query("SELECT id, firstname, lastname, email, role, createdat FROM users ORDER BY createdat DESC");
  res.status(200).json({ success: true, users: result.rows });
});

export const getUserDetailsAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userResult = await query("SELECT id, firstname, lastname, email, role, createdat FROM users WHERE id = $1", [id]);
  const ordersResult = await query("SELECT * FROM orders WHERE userid = $1 ORDER BY createdat DESC", [id]);
  
  if (userResult.rows.length === 0) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
  
  res.status(200).json({
    success: true,
    user: userResult.rows[0],
    orders: ordersResult.rows
  });
});
