import express from 'express';

import 'dotenv/config';
import { router } from './routes/index.js';

const app = express();
app.use(express.json());
app.use(router);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
