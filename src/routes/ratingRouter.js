import express from 'express';

import { createRating, editRating } from '../controllers/ratingControllers.js';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';

const ratingRouter = express.Router();

ratingRouter.post('/', ensureAuthenticated, createRating);
ratingRouter.put('/:id', ensureAuthenticated, editRating);

export { ratingRouter };
