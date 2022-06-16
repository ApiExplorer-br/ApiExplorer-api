import express from 'express';

import {
    createFront,
    getAllFronts,
    getFrontById,
    editFront    
} from '../controllers/frontController.js';


import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';
import { validateFront } from '../middlewares/validateFront.js';
import { ensureIsFrontOwner } from '../middlewares/ensureIsFrontOwner.js'; 

const frontRouter = express.Router();

frontRouter.post('/', ensureAuthenticated, createFront);
frontRouter.get('/', getAllFronts);
frontRouter.get('/:id', getFrontById);
frontRouter.put('/:id', ensureAuthenticated, ensureIsFrontOwner, validateFront, editFront);




export { frontRouter };
