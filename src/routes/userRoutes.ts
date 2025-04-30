import express from 'express';
import { 
  registerUser, 
  loginUser, 
  logoutUser,
  getUserProfile, 
  initiatePasswordReset, 
  resetPassword,
  checkAuth
} from '../controllers/userController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

// Trasy publiczne (dostępne bez logowania)
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/password-reset/initiate', initiatePasswordReset);
router.post('/password-reset/confirm', resetPassword);
router.get('/check-auth', authenticate, checkAuth);

// Trasy chronione (wymagają tokenu JWT)
router.get('/profile', authenticate, getUserProfile);

export default router;