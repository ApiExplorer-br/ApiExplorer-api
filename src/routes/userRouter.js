import express from 'express';

import {
  getDataUserFromGithub,
  deleteUser,
  deleteUserByAdmin,
  refreshToken,
  getAll,
  getById,
  getProfile,
  editProfile,
  getAllProjects,
} from '../controllers/userControllers.js';
import { ensureAdmin } from '../middlewares/ensureAdmin.js';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';

const userRouter = express.Router();

userRouter.get('/', ensureAuthenticated, ensureAdmin, getAll);
userRouter.get('/projects', ensureAuthenticated, getAllProjects);
userRouter.get('/:id', getById);
userRouter.get('/profile', ensureAuthenticated, getProfile);
userRouter.get('/login/get-user-data', getDataUserFromGithub);
userRouter.post('/refresh-token', refreshToken);
userRouter.put('/profile', ensureAuthenticated, editProfile);
userRouter.delete('/', ensureAuthenticated, deleteUser);
userRouter.delete(
  '/by-admin/:id',
  ensureAuthenticated,
  ensureAdmin,
  deleteUserByAdmin
);

export { userRouter };
