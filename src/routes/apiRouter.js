import express from 'express';
import  {createApi}  from '../controllers/apiControllers.js';
import validateUrl from '../middlewares/validateUrl.js';

const apiRouter = express.Router();

apiRouter.post('/',  validateUrl, createApi);
 
export default apiRouter;
