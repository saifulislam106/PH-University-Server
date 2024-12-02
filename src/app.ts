import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/midlewares/globalErrorHandler';
import notFound from './app/midlewares/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1' ,router )


const result = (req: Request, res: Response) => {
  res.send("server is runnig on browser");
};
app.get('/', result);

app.use(globalErrorHandler);

app.use(notFound)

export default app;
