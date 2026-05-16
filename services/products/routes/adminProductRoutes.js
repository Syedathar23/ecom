import express from 'express';
import { getAllProductsAdmin, createProduct, updateProduct, deleteProduct } from '../controllers/adminProductController.js';
import { userAuth, isAdmin } from '../../shared/authMiddleware.js';

const router = express.Router();

router.use(userAuth);
router.use(isAdmin);

router.get('/products', getAllProductsAdmin);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
