import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userroutes from "./routes/userroutes.js";
import productroutes from "./routes/productroutes/productroutes.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

/* Middleware */

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

/* Routes */

app.get("/", (req, res) => {
  res.send("Server is live");
});

app.use("/api/users", userroutes);
app.use("/api/products", productroutes);

/* Server */

app.listen(PORT, () => {
  console.log(`Server is Live at port ${PORT}`);
});