import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(morgan('common'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.send('OK');
});

export { app };
