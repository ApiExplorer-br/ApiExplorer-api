import express from 'express';
import apiRouter from './apiRouter';

const router = express.Router();

router.use('/api', apiRouter);

export default router;
