

/* eslint-disable no-unused-expressions */

/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { TErrorSource } from '../interface/error';
import { ZodIssue } from 'zod-validation-error';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';

  let errorSources: TErrorSource = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  const handleZodError = (err:ZodError)=>{

    const errorSources :TErrorSource = err.issues.map((issue:ZodIssue)=>{
        return{
            path:issue?.path [issue.path.length-1],
            message:issue.message
        }
    })
    const statusCode = 400;

    return{
        statusCode,
        message : "Validation Error",
        errorSources
    }
  }

  if (err instanceof ZodError) {
    const simplifiedZodError = handleZodError(err)
    message= simplifiedZodError.message,
    statusCode =simplifiedZodError.statusCode,
    errorSources = simplifiedZodError.errorSources
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    // error: err,
  });
};
export default globalErrorHandler;
