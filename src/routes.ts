import { Router } from 'express';
import AuthController from './controllers/AuthController';
import UserController from './controllers/UserController';


const router = Router();

router.post('/users', UserController.store);
router.post('/auth', AuthController.authenticate);

export default router;