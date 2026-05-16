import express from 'express';
import { adminLogin, getDashboardStats, getAllUsersAdmin, getUserDetailsAdmin } from '../controllers/adminController.js';
import { userAuth, isAdmin } from '../../shared/authMiddleware.js';

const router = express.Router();

// Public Admin routes
router.post('/login', adminLogin);

// Protected Admin routes
router.use(userAuth);
router.use(isAdmin);

router.get('/dashboard', getDashboardStats);

// User Management
router.get('/users', getAllUsersAdmin);
router.get('/users/:id', getUserDetailsAdmin);

export default router;
