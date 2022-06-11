import express from 'express';

import { apiRouter } from './apiRouter.js';
import { categoryRouter } from './categoryRouter.js';
import { userRouter } from './userRouter.js';
import { ratingRouter } from './ratingRouter.js';

const router = express.Router();

router.use('/apis', apiRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/rating', ratingRouter);

export { router };
