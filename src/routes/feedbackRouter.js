import express from 'express';

import {
  getAll,
  createFeedback,
  deleteFeedback,
} from '../controllers/feedbackController.js';
import { ensureAdmin } from '../middlewares/ensureAdmin.js';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';

const feedbackRouter = express.Router();

feedbackRouter.post('/', ensureAuthenticated, createFeedback);
feedbackRouter.get('/', ensureAuthenticated, ensureAdmin, getAll);
feedbackRouter.delete('/:id', ensureAuthenticated, ensureAdmin, deleteFeedback);

export { feedbackRouter };
