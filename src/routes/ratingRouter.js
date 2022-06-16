import express from 'express';

import {
  createRating,
  editRating,
  deleteRating,
  getEvaluationsByApi,
} from '../controllers/ratingControllers.js';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';
import { ensureIsRatingOwner } from '../middlewares/ensureIsRatingOwner.js';

const ratingRouter = express.Router();

ratingRouter.post('/', ensureAuthenticated, createRating);
ratingRouter.get('/by-api/:id', getEvaluationsByApi);
ratingRouter.put('/:id', ensureAuthenticated, ensureIsRatingOwner, editRating);
ratingRouter.delete(
  '/:id',
  ensureAuthenticated,
  ensureIsRatingOwner,
  deleteRating
);

export { ratingRouter };
