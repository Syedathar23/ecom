import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import addressRoutes from "./routes/addressRoutes.js";
import adminAuthRoutes from "./routes/adminAuthRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.AUTH_PORT || 5001;

/* Middleware */
app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5174",
    "http://localhost:5173",
    "http://localhost:5000" // Gateway
  ],
  credentials: true
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

/* Health Check */
app.get("/", (req, res) => {
  res.json({ service: "auth-service", status: "healthy", timestamp: new Date().toISOString() });
});

/* Routes */
app.use("/api/users", userRoutes);
app.use("/api/user/addresses", addressRoutes);
app.use("/api/admin", adminAuthRoutes);

/* Start */
app.listen(PORT, () => {
  console.log(`🔐 Auth Service is live on port ${PORT}`);
});
