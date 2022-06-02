import express from 'express';
import  {createApi}  from '../controllers/apiControllers.js';

const apiRouter = express.Router();

apiRouter.post('/', createApi);
 
export default apiRouter;
