import express from 'express';
import 'express-async-errors';

import 'dotenv/config';
import { AppError } from './errors/AppError.js';
import { router } from './routes/index.js';

const app = express();
app.use(express.json());
app.use(router);

app.use((err, _request, response, next) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }
  if (err.message === 'Request failed with status code 404') {
    return response
      .status(404)
      .json({ message: 'Repository not found or private' });
  }
  if (!err.statusCode) {
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  }
  return next();
});

app.listen(process.env.PORT, () => console.log('Server started on port 3333'));
