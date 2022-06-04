import express from 'express';

import {
  createApi,
  getAllApis,
  getApiByCategory,
} from '../controllers/apiControllers.js';
import { validateUrl } from '../middlewares/validateUrl.js';

const apiRouter = express.Router();

apiRouter.get('/', getAllApis);
apiRouter.get('/:category', getApiByCategory);
apiRouter.post('/', validateUrl, createApi);

export { apiRouter };
