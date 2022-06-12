import express from 'express';

import {
  createRating,
  editRating,
  deleteRating,
} from '../controllers/ratingControllers.js';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';
import { ensureIsRatingOwner } from '../middlewares/ensureIsRatingOwner.js';

const ratingRouter = express.Router();

ratingRouter.post('/', ensureAuthenticated, createRating);
ratingRouter.put('/:id', ensureAuthenticated, ensureIsRatingOwner, editRating);
ratingRouter.delete(
  '/:id',
  ensureAuthenticated,
  ensureIsRatingOwner,
  deleteRating
);

export { ratingRouter };
