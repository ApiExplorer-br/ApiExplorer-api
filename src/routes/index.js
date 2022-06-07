import express from 'express';

import { apiRouter } from './apiRouter.js';
import { userRouter } from './userRouter.js';

const router = express.Router();

router.use('/apis', apiRouter);
router.use('/users', userRouter);

export { router };
