import { Router } from 'express';

import authMiddlaware from './middlewares/authMiddleware';

import { AuthController }  from './controllers/AuthController';
import { UserController } from './controllers/UserController';


const userController = new UserController();
const authController = new AuthController();


const router = Router();

router.post('/users', userController.store);
router.post('/auth', authController.authenticate);
router.get('/users', authMiddlaware, userController.index)

export default router;