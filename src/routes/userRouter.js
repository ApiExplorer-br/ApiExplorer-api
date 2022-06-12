import express from 'express';

import {
  getDataUserFromGithub,
  loginGithub,
  deleteUser,
} from '../controllers/userControllers.js';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';

const userRouter = express.Router();

userRouter.get('/login/github', loginGithub);
userRouter.get('/login/get-user-data', getDataUserFromGithub);
userRouter.delete('/', ensureAuthenticated, deleteUser);

export { userRouter };
