import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import notFound from './app/middleware/notFound';
import globalErrorHandler from './app/middleware/globalErrorHandler';

const app: Application = express();

// Persers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', router);
app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Bike rental API!');
});

app.use(notFound);

export default app;