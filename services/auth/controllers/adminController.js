import asyncHandler from "express-async-handler";
import { query } from "../../shared/db.js";
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

// Dashboard Stats (Calculated from shared DB)
export const getDashboardStats = asyncHandler(async (req, res) => {
  const ordersCount = await query("SELECT COUNT(*) FROM orders");
  const totalRevenue = await query("SELECT SUM(totalamount) FROM orders WHERE paymentstatus = 'Paid' OR paymentstatus = 'Completed'");
  
  const totalProfit = await query(`
    SELECT SUM(oi.quantity * (p.sellprice - p.costprice)) as profit
    FROM order_items oi
    JOIN products p ON oi.productid = p.id
    JOIN orders o ON oi.orderid = o.id
    WHERE o.status != 'Cancelled'
  `);

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

  const monthlySales = await query(`
    SELECT TO_CHAR(o.createdat, 'Mon YYYY') as name, 
           SUM(o.totalamount) as total,
           COALESCE(SUM(oi_profit.profit), 0) as profit
    FROM orders o
    LEFT JOIN (
      SELECT orderid, SUM(quantity * (p.sellprice - p.costprice)) as profit
      FROM order_items
      JOIN products p ON productid = p.id
      GROUP BY orderid
    ) oi_profit ON o.id = oi_profit.orderid
    WHERE o.status != 'Cancelled'
    GROUP BY TO_CHAR(o.createdat, 'Mon YYYY'), EXTRACT(YEAR FROM o.createdat), EXTRACT(MONTH FROM o.createdat)
    ORDER BY EXTRACT(YEAR FROM o.createdat), EXTRACT(MONTH FROM o.createdat)
  `);

  const yearlySales = await query(`
    SELECT CAST(EXTRACT(YEAR FROM o.createdat) AS INTEGER) as name, 
           SUM(o.totalamount) as total,
           COALESCE(SUM(oi_profit.profit), 0) as profit
    FROM orders o
    LEFT JOIN (
      SELECT orderid, SUM(quantity * (p.sellprice - p.costprice)) as profit
      FROM order_items
      JOIN products p ON productid = p.id
      GROUP BY orderid
    ) oi_profit ON o.id = oi_profit.orderid
    WHERE o.status != 'Cancelled'
    GROUP BY EXTRACT(YEAR FROM o.createdat)
    ORDER BY EXTRACT(YEAR FROM o.createdat)
  `);

  const topSellers = await query(`
    SELECT p.id, p.title, p.sellprice, SUM(oi.quantity) as sales_count, SUM(oi.quantity * oi.price) as revenue
    FROM order_items oi
    JOIN products p ON oi.productid = p.id
    JOIN orders o ON oi.orderid = o.id
    WHERE o.status != 'Cancelled'
    GROUP BY p.id, p.title, p.sellprice
    ORDER BY sales_count DESC
    LIMIT 5
  `);

  res.status(200).json({
    success: true,
    stats: {
      totalOrders: parseInt(ordersCount.rows[0].count),
      totalRevenue: parseFloat(totalRevenue.rows[0].sum || 0),
      totalProfit: parseFloat(totalProfit.rows[0].profit || 0),
      totalProducts: parseInt(productsCount.rows[0].count),
      totalUsers: parseInt(usersCount.rows[0].count),
      recentOrders: recentOrders.rows,
      statusBreakdown: statusBreakdown.rows,
      monthlySales: monthlySales.rows,
      yearlySales: yearlySales.rows,
      topSellers: topSellers.rows
    }
  });
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
