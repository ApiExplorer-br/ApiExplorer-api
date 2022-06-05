import cors from 'cors';
import express from 'express';

import { loginGithub } from '../controllers/userControllers.js';

const corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const userRouter = express.Router();

userRouter.get('/login', cors(corsOptions), loginGithub);

export { userRouter };
