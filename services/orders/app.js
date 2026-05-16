import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import adminOrderRoutes from "./routes/adminOrderRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.ORDER_PORT || 5003;

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
  res.json({ service: "order-service", status: "healthy", timestamp: new Date().toISOString() });
});

/* Routes */
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminOrderRoutes);

/* Start */
app.listen(PORT, () => {
  console.log(`🛒 Order Service is live on port ${PORT}`);
});
