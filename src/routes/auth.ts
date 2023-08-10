import express from 'express';
import AuthController from '../auth/AuthController';

const router = express.Router();

router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);

export default router;
 