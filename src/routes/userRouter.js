import express from 'express';

import {
  getDataUserFromGithub,
  loginGithub,
} from '../controllers/userControllers.js';

const userRouter = express.Router();

userRouter.get('/login/github', loginGithub);
userRouter.get('/login/get-user-data', getDataUserFromGithub);

export { userRouter };
