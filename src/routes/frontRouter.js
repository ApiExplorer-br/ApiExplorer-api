import express from 'express';

import {
    createFront,
    getAllFronts,
} from '../controllers/frontController.js';


import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';
// import { ensureIsRatingOwner } from '../middlewares/ensureIsRatingOwner.js'; 
// ajustare para ensureIsFrontOwner


const frontRouter = express.Router();

// ratingRouter.post('/', ensureAuthenticated, createFront);
// ratingRouter.get('/', ensureAuthenticated, getAllFronts);
frontRouter.post('/', ensureAuthenticated, createFront);
frontRouter.get('/', getAllFronts);



export { frontRouter };
