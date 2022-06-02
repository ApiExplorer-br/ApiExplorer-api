import express from 'express';
import apiRouter from './apiRouter';

const router = express.Router();

router.use('/apis', apiRouter);

export default router;
