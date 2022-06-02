import express from 'express';
import apiRouter from './apiRouter.js';

const router = express.Router();

router.use('/apis', apiRouter);

export default router;
