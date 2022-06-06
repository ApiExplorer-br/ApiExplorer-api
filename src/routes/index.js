import express from 'express';

import { apiRouter } from './apiRouter.js';
import { githubLoginRouter } from './githubLoginRouter.js';
import { userRouter } from './userRouter.js';

const router = express.Router();

router.use('/apis', apiRouter);
router.use('/login', githubLoginRouter);
router.use('/users', userRouter);

export { router };
