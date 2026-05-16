import express from "express";
import { createProduct, fetchAllProducts, fetchFreeproducts, fetchPaidProd, fetchTiktokProd, fetchGoogleProd, fetchFacebookProd, fetchSingleProd, fetchSingleProdFree, updateProduct, deleteProductSingle, deleteAllProducts } from "../controllers/productController.js";
import { userAuth } from "../../shared/authMiddleware.js";
import { upload } from "../middleware/multer.js";
import { uploadMultipleCouldinary } from "../middleware/uploadCloudinary.js";

const route = express.Router();

route.post("/createproduct", userAuth, upload.array("images"), uploadMultipleCouldinary, createProduct);
route.get("/fetchallproducts", userAuth, fetchAllProducts);
route.get("/fetchfreeproducts", fetchFreeproducts);
route.get("/fetchPaidProd", fetchPaidProd);
route.get("/fetchGoogleProd", fetchGoogleProd);
route.get("/fetchFacebookProd", fetchFacebookProd);
route.get("/fetchTiktokProd", fetchTiktokProd);
route.get("/fetchSingleProd/:id", fetchSingleProd);
route.get("/fetchSingleProdFree/:id", fetchSingleProdFree);
route.put("/updateProduct/:id", userAuth, updateProduct);
route.delete("/deleteProductSingle/:id", deleteProductSingle);
route.delete("/deleteAllProducts", deleteAllProducts);

export default route;
