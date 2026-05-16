import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/productRoutes.js";
import adminProductRoutes from "./routes/adminProductRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PRODUCT_PORT || 5002;

/* Middleware */
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5174", "http://localhost:5173", "http://localhost:5000"],
  credentials: true
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

/* Health Check */
app.get("/", (req, res) => {
  res.json({ service: "product-service", status: "healthy", timestamp: new Date().toISOString() });
});

/* Routes */
app.use("/api/products", productRoutes);
app.use("/api/admin", adminProductRoutes);

/* Start */
app.listen(PORT, () => {
  console.log(`📦 Product Service is live on port ${PORT}`);
});
