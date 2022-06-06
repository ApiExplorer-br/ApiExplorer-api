import express from 'express';

import {
  getDataUser,
  loginGithub,
} from '../controllers/githubLoginController.js';

const githubLoginRouter = express.Router();

githubLoginRouter.get('/github', loginGithub);
githubLoginRouter.get('/success', getDataUser);

export { githubLoginRouter };
