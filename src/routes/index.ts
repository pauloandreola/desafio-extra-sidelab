import { Router } from 'express';

import { usersRoutes } from '../routes/user.routes';
import { authenticateRoutes } from './authenticate.routes';

export const router = Router();

router.use("/users", usersRoutes);
router.use("/login", authenticateRoutes);