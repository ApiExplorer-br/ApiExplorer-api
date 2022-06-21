import express from 'express';

import {
  createRating,
  editRating,
  deleteRating,
  getEvaluationsByFront,
} from '../controllers/ratingFrontControllers.js';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';
import { ensureIsRatingOwner } from '../middlewares/ensureIsRatingOwner.js';

const ratingFrontRouter = express.Router();

ratingFrontRouter.post('/', ensureAuthenticated, createRating);
ratingFrontRouter.get('/by-front/:id', getEvaluationsByFront);
ratingFrontRouter.put(
  '/:id',
  ensureAuthenticated,
  ensureIsRatingOwner,
  editRating
);
ratingFrontRouter.delete(
  '/:id',
  ensureAuthenticated,
  ensureIsRatingOwner,
  deleteRating
);

export { ratingFrontRouter };
