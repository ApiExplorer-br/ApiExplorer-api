import express from 'express';

import { loginGithub } from '../controllers/userControllers.js';

const userRouter = express.Router();

userRouter.get('/login', loginGithub);

export { userRouter };
