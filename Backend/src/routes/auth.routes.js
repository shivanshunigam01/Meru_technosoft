import express from 'express';
import AuthController from '../controller/auth.contoller.js';
import verifyToken from '../middleware/verifyToken.js';
import registrationValidator from '../validator/registration.validator.js';
import loginValidator from '../validator/login.validator.js';

const router = express.Router();
const authController = new AuthController();

router.post('/register', registrationValidator, authController.userRegistration);
router.post('/login', loginValidator, authController.userLogin);
router.post('/getUserProfile', verifyToken, authController.getUserProfile);

export default router;