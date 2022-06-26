import express from 'express';
import muter from 'multer';

import { multerConfig } from '../config/index.js';
import {
  createFront,
  getAllFronts,
  getFrontById,
  editFront,
  deleteFront,
} from '../controllers/frontController.js';
import { addImage, deleteImage } from '../controllers/uploadController.js';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';
import { ensureIsFrontOwner } from '../middlewares/ensureIsFrontOwner.js';
import { validateEditFront } from '../middlewares/validateEditFront.js';
import { validateFront } from '../middlewares/validateFront.js';

const frontRouter = express.Router();

frontRouter.post('/', validateFront, ensureAuthenticated, createFront);
frontRouter.get('/', getAllFronts);
frontRouter.get('/:id', getFrontById);
frontRouter.put(
  '/:id',
  ensureAuthenticated,
  ensureIsFrontOwner,
  validateEditFront,
  editFront
);

frontRouter.delete(
  '/:id',
  ensureAuthenticated,
  ensureIsFrontOwner,
  deleteFront
);

frontRouter.put(
  '/image/:id',
  ensureAuthenticated,
  ensureIsFrontOwner,
  muter(multerConfig).single('file'),
  addImage
);

frontRouter.delete('/image/:id', ensureAuthenticated, deleteImage);

export { frontRouter };
