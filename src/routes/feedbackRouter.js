import express from 'express';

import { getAll } from '../controllers/feedbackController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const feedbackRouter = express.Router();

feedbackRouter.get('/', ensureAuthenticated, ensureAdmin, getAll);
