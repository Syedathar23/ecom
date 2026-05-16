import asyncHandler from "express-async-handler";
import { query } from "../../shared/db.js";

// Product Management for Admin
export const getAllProductsAdmin = asyncHandler(async (req, res) => {
  const result = await query("SELECT * FROM products ORDER BY createdat DESC");
  res.status(200).json({ success: true, products: result.rows });
});

export const createProduct = asyncHandler(async (req, res) => {
  try {
    const { title, description, costprice, sellprice, category, image1, stock } = req.body;
    const result = await query(
      `INSERT INTO products (title, description, costprice, sellprice, category, image1, stock, badge, createdat, updatedat) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW()) RETURNING *`,
      [title, description, costprice || 0, sellprice, category, image1, stock || 0, 'New Arrival']
    );
    res.status(201).json({ success: true, product: result.rows[0] });
  } catch (error) {
    console.error("Create Product Error:", error);
    res.status(500).json({ success: false, message: error.message || "Failed to create product" });
  }
});

export const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, costprice, sellprice, category, image1, stock } = req.body;
    const result = await query(
      `UPDATE products SET title = $1, description = $2, costprice = $3, sellprice = $4, category = $5, image1 = $6, stock = $7, updatedat = NOW() 
       WHERE id = $8 RETURNING *`,
      [title, description, costprice || 0, sellprice, category, image1, stock || 0, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, product: result.rows[0] });
  } catch (error) {
    console.error("Update Product Error:", error);
    res.status(500).json({ success: false, message: error.message || "Failed to update product" });
  }
});

export const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    
    // 1. Delete from cart_items first (cross-service join alternative or direct DB access)
    await query("DELETE FROM cart_items WHERE productid = $1", [id]);
    
    // 2. Try to delete the product
    await query("DELETE FROM products WHERE id = $1", [id]);
    
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.error("Delete Product Error:", error);
    
    // Foreign key constraint violation (likely order_items)
    if (error.code === '23503') { 
      return res.status(400).json({ 
        success: false, 
        message: "Cannot delete this product because it is linked to existing customer orders. You should edit it to 'Out of Stock' or similar instead of deleting." 
      });
    }
    
    res.status(500).json({ success: false, message: error.message || "Failed to delete product" });
  }
});
