import express from 'express';

import { apiRouter } from './apiRouter.js';
import { categoryRouter } from './categoryRouter.js';
import { feedbackRouter } from './feedbackRouter.js';
import { ratingRouter } from './ratingRouter.js';
import { userRouter } from './userRouter.js';
import { frontRouter } from './frontRouter.js';

const router = express.Router();

router.use('/apis', apiRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/ratings', ratingRouter);
router.use('/feedbacks', feedbackRouter);
router.use('/fronts', frontRouter);

export { router };
