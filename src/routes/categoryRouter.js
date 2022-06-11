import express from 'express';

import { getAllCategories } from '../controllers/categoriesControllers.js';

const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategories);

export { categoryRouter };
