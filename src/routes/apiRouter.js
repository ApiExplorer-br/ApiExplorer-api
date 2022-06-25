import express from 'express';

import {
  createApi,
  getAllApis,
  getApiByCategory,
  getApiById,
  deleteApi,
  editApi,
} from '../controllers/apiControllers.js';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';
import { ensureIsApiOwner } from '../middlewares/ensureIsApiOwner.js';
import { validateData } from '../middlewares/validateData.js';

const apiRouter = express.Router();

apiRouter.get('/', getAllApis);
apiRouter.get('/:id', getApiById);
apiRouter.get('/category/:id', getApiByCategory);
apiRouter.post('/', ensureAuthenticated, validateData, createApi);
apiRouter.put(
  '/:id',
  ensureAuthenticated,
  ensureIsApiOwner,
  validateData,
  editApi
);
apiRouter.delete('/:id', ensureAuthenticated, deleteApi);

export { apiRouter };
