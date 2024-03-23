import cors from 'cors';
import { errorHandlingMiddleware } from './error';
import express from 'express';
import morgan from 'morgan';
import { router } from './air-quality';

const app = express();

app.use(cors());
app.use(morgan('common'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.send('OK');
});

app.use('/api', router);

app.use((req, res) => {
  res.status(404).send('Not found');
});

app.use(errorHandlingMiddleware);

export { app };
