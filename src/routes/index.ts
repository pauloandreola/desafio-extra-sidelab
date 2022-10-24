import { Router } from 'express';
import { usersRoutes } from '../routes/user.routes';

export const router = Router();

router.use("/users", usersRoutes);