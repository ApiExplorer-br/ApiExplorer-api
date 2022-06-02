import express from 'express';
import { createApi } from '../controllers/apiControllers';

const apiRouter = express.Router();

apiRouter.post('/', createApi);

export default apiRouter;
