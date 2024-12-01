import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';
import { userRouter } from './app/modules/user/user.router';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', userRouter);

const getAController = (req: Request, res: Response) => {
 
  res.send("server is runnig on browser");
};

app.get('/', getAController);

export default app;
