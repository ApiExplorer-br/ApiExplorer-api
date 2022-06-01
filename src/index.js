import express from "express";
import 'dotenv/config';
import routes from './routes';
const app = express();
app.use(routes)
app.use(express.json());


app.listen(3333, () => console.log("server running on 3333"));