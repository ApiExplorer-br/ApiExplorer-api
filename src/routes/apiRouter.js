import express from 'express';

import {
  createApi,
  getAllApis,
  getApiByCategory,
  getApiById,
  deleteApi,
  getApiByUser,
} from '../controllers/apiControllers.js';
import { ensureAdmin } from '../middlewares/ensureAdmin.js';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';
import { validateUrl } from '../middlewares/validateUrl.js';

const apiRouter = express.Router();

apiRouter.get('/', getAllApis);
apiRouter.get('/by-user', ensureAuthenticated, getApiByUser);
apiRouter.get('/:id', getApiById);
apiRouter.get('/category/:id', getApiByCategory);
apiRouter.post('/', ensureAuthenticated, validateUrl, createApi);
apiRouter.delete('/:id', ensureAuthenticated, ensureAdmin, deleteApi);

export { apiRouter };
