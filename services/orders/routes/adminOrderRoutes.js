import express from 'express';
import { getAllOrdersAdmin, updateOrderStatus } from '../controllers/adminOrderController.js';
import { userAuth, isAdmin } from '../../shared/authMiddleware.js';

const router = express.Router();

router.use(userAuth);
router.use(isAdmin);

router.get('/orders', getAllOrdersAdmin);
router.put('/orders/:id/status', updateOrderStatus);

export default router;
