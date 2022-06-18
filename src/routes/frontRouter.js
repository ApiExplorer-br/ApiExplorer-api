import express from 'express';

import {
  createFront,
  getAllFronts,
  getFrontById,
  editFront,
  deleteFront,
} from '../controllers/frontController.js';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';
import { ensureIsFrontOwner } from '../middlewares/ensureIsFrontOwner.js';
import { validateEditFront } from '../middlewares/validateEditFront.js';
import { validateFront } from '../middlewares/validateFront.js';

const frontRouter = express.Router();

frontRouter.post('/', validateFront, ensureAuthenticated, createFront);
frontRouter.get('/', getAllFronts);
frontRouter.get('/:id', getFrontById);
frontRouter.put(
  '/:id',
  ensureAuthenticated,
  ensureIsFrontOwner,
  validateEditFront,
  editFront
);
frontRouter.delete(
  '/:id',
  ensureAuthenticated,
  ensureIsFrontOwner,
  deleteFront
);

export { frontRouter };
