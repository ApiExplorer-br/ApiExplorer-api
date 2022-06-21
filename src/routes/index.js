import express from 'express';

import { apiRouter } from './apiRouter.js';
import { categoryRouter } from './categoryRouter.js';
import { feedbackRouter } from './feedbackRouter.js';
import { frontRouter } from './frontRouter.js';
import { ratingFrontRouter } from './ratingFrontRouter.js';
import { ratingRouter } from './ratingRouter.js';
import { userRouter } from './userRouter.js';

const router = express.Router();

router.use('/apis', apiRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/ratings', ratingRouter);
router.use('/frontRatings', ratingFrontRouter);
router.use('/feedbacks', feedbackRouter);
router.use('/fronts', frontRouter);

export { router };
