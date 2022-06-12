import express from 'express';

import {
  createRating,
  editRating,
  deleteRating,
} from '../controllers/ratingControllers.js';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';
import { isOwnerRating } from '../middlewares/isOwnerRating.js';

const ratingRouter = express.Router();

ratingRouter.post('/', ensureAuthenticated, createRating);
ratingRouter.put('/:id', ensureAuthenticated, isOwnerRating, editRating);
ratingRouter.delete('/:id', ensureAuthenticated, isOwnerRating, deleteRating);

export { ratingRouter };
