import { Router } from 'express';
import { createUserController, getUserController } from '../controllers/userController';

const router = Router();

router.post('/create', createUserController);
router.get('/:userId', getUserController);

export default router;
