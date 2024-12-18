import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import catchAsync from '../utils/catchAsync';

// Validate midleware
const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // validate before next call

    await schema.parseAsync({
      body: req.body,
    });
    next();
  });
};

export default validateRequest;
