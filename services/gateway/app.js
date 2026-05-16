import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const app = express();
const PORT = process.env.GATEWAY_PORT || 5000;

// Service URLs
const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || "http://localhost:5001";
const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL || "http://localhost:5002";
const ORDER_SERVICE_URL = process.env.ORDER_SERVICE_URL || "http://localhost:5003";

/* Middleware */
app.use(cors({
  origin: ["http://localhost:5174", "http://localhost:5173"],
  credentials: true
}));

/* Health Check */
app.get("/", (req, res) => {
  res.json({
    service: "api-gateway",
    status: "healthy",
    timestamp: new Date().toISOString(),
    routes: {
      auth: AUTH_SERVICE_URL,
      products: PRODUCT_SERVICE_URL,
      orders: ORDER_SERVICE_URL,
    }
  });
});

/* ─── Route Proxies ──────────────────────────────────────── */

// Auth Service: /api/users/*, /api/user/addresses/*, /api/admin/login, /api/admin/dashboard, /api/admin/users/*
app.use("/api/users", createProxyMiddleware({
  target: AUTH_SERVICE_URL,
  changeOrigin: true,
}));

app.use("/api/user/addresses", createProxyMiddleware({
  target: AUTH_SERVICE_URL,
  changeOrigin: true,
}));

// Admin routes need to be split across services
// Auth-related admin routes: login, dashboard, users
app.use("/api/admin/login", createProxyMiddleware({
  target: AUTH_SERVICE_URL,
  changeOrigin: true,
}));

app.use("/api/admin/dashboard", createProxyMiddleware({
  target: AUTH_SERVICE_URL,
  changeOrigin: true,
}));

app.use("/api/admin/users", createProxyMiddleware({
  target: AUTH_SERVICE_URL,
  changeOrigin: true,
}));

// Product-related admin routes
app.use("/api/admin/products", createProxyMiddleware({
  target: PRODUCT_SERVICE_URL,
  changeOrigin: true,
}));

// Order-related admin routes
app.use("/api/admin/orders", createProxyMiddleware({
  target: ORDER_SERVICE_URL,
  changeOrigin: true,
}));

// Product Service: /api/products/*
app.use("/api/products", createProxyMiddleware({
  target: PRODUCT_SERVICE_URL,
  changeOrigin: true,
}));

// Order Service: /api/cart/*, /api/orders/*
app.use("/api/cart", createProxyMiddleware({
  target: ORDER_SERVICE_URL,
  changeOrigin: true,
}));

app.use("/api/orders", createProxyMiddleware({
  target: ORDER_SERVICE_URL,
  changeOrigin: true,
}));

/* Start */
app.listen(PORT, () => {
  console.log(`🌐 API Gateway is live on port ${PORT}`);
  console.log(`   ├── Auth Service   → ${AUTH_SERVICE_URL}`);
  console.log(`   ├── Product Service → ${PRODUCT_SERVICE_URL}`);
  console.log(`   └── Order Service   → ${ORDER_SERVICE_URL}`);
});
