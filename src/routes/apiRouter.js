import express from 'express';

import { createApi, getAllApis } from '../controllers/apiControllers.js';
import { validateUrl } from '../middlewares/validateUrl.js';

const apiRouter = express.Router();

apiRouter.get('/', getAllApis);
apiRouter.post('/', validateUrl, createApi);

export { apiRouter };
