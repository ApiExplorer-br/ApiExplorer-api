import express from 'express';

import {
    createFront,
    getAllFronts,
    getFrontById
} from '../controllers/frontController.js';


import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';
// import { ensureIsRatingOwner } from '../middlewares/ensureIsRatingOwner.js'; 
// ajustare para ensureIsFrontOwner


const frontRouter = express.Router();

frontRouter.post('/', ensureAuthenticated, createFront);
frontRouter.get('/', getAllFronts);
frontRouter.get('/:id', getFrontById);



export { frontRouter };
