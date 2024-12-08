

/* eslint-disable no-unused-expressions */

/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { TErrorSource } from '../interface/error';
import { ZodIssue } from 'zod-validation-error';
import config from '../config';
import handleZodError from '../errors/handleZodError';
import handleValidationError from '../errors/handleValidationError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';

  let errorSources: TErrorSource = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedZodError = handleZodError(err)
    message= simplifiedZodError.message,
    statusCode =simplifiedZodError.statusCode,
    errorSources = simplifiedZodError.errorSources
  }else if(err.name ==='ValidationError'){
    const simplifiedValidationError = handleValidationError(err)
    message= simplifiedValidationError.message,
    statusCode =simplifiedValidationError.statusCode,
    errorSources = simplifiedValidationError.errorSources
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack:config.node_env === "development" ? err?.stack : null,
    // err,
  });
};
export default globalErrorHandler;
