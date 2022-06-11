import express from 'express';

import { createRating } from '../controllers/ratingControllers.js';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';

const ratingRouter = express.Router();

ratingRouter.post('/', ensureAuthenticated, createRating);

export { ratingRouter };