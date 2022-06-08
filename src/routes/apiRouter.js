import express from 'express';

import {
  createApi,
  getAllApis,
  getApiByCategory,
  getApiById,
} from '../controllers/apiControllers.js';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';
import { validateUrl } from '../middlewares/validateUrl.js';

const apiRouter = express.Router();

apiRouter.get('/', getAllApis);
apiRouter.get('/:id', getApiById);
apiRouter.get('/list/:category', getApiByCategory);
apiRouter.post('/', ensureAuthenticated, validateUrl, createApi);

export { apiRouter };
