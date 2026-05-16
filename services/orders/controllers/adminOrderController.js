import asyncHandler from "express-async-handler";
import { query } from "../../shared/db.js";

// Order Management for Admin
export const getAllOrdersAdmin = asyncHandler(async (req, res) => {
  try {
    const result = await query(`
      SELECT o.*, u.firstname, u.lastname, u.email, 
             a.address_line_1 as address, a.city, a.state, a.pincode
      FROM orders o 
      JOIN users u ON o.userid = u.id 
      LEFT JOIN addresses a ON o.addressid = a.id
      ORDER BY o.createdat DESC
    `);
    res.status(200).json({ success: true, orders: result.rows });
  } catch (error) {
    console.error("Get All Orders Error:", error);
    res.status(500).json({ success: false, message: error.message || "Failed to fetch orders" });
  }
});

export const updateOrderStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const result = await query(
      "UPDATE orders SET status = $1, updatedat = NOW() WHERE id = $2 RETURNING *",
      [status, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }
    res.status(200).json({ success: true, order: result.rows[0] });
  } catch (error) {
    console.error("Update Order Status Error:", error);
    res.status(500).json({ success: false, message: error.message || "Failed to update order status" });
  }
});
