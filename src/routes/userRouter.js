import express from 'express';

import {
  getDataUserFromGithub,
  loginGithub,
  deleteUser,
  deleteUserByAdmin,
  refreshToken,
  getAll,
} from '../controllers/userControllers.js';
import { ensureAdmin } from '../middlewares/ensureAdmin.js';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';

const userRouter = express.Router();

userRouter.get('/', ensureAuthenticated, ensureAdmin, getAll);
userRouter.post('/refresh-token', refreshToken);
userRouter.get('/login/github', loginGithub);
userRouter.get('/login/get-user-data', getDataUserFromGithub);
userRouter.delete('/', ensureAuthenticated, deleteUser);
userRouter.delete(
  '/by-admin/:id',
  ensureAuthenticated,
  ensureAdmin,
  deleteUserByAdmin
);

export { userRouter };
