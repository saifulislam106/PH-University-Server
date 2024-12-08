/* eslint-disable no-unused-expressions */

/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { TErrorSource } from '../interface/error';
import config from '../config';
import handleZodError from '../errors/handleZodError';
import handleValidationError from '../errors/handleValidationError';
import handleCastError from '../errors/handleCastError';
import handleDuplicateError from '../errors/handleDuplicateError';
import AppError from '../errors/AppError';

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
    const simplifiedZodError = handleZodError(err);
    (message = simplifiedZodError.message),
      (statusCode = simplifiedZodError.statusCode),
      (errorSources = simplifiedZodError.errorSources);
  } else if (err.name === 'ValidationError') {
    const simplifiedValidationError = handleValidationError(err);
    (message = simplifiedValidationError.message),
      (statusCode = simplifiedValidationError.statusCode),
      (errorSources = simplifiedValidationError.errorSources);
  } else if (err.name === 'CastError') {
    const simplifiedError = handleCastError(err);
    (message = simplifiedError.message),
      (statusCode = simplifiedError.statusCode),
      (errorSources = simplifiedError.errorSources);
  } else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    errorSources = [
      {
        path: '',
        message: err.message,
      },
    ];
  }
   else if (err instanceof Error) {
    message = err.message;
    errorSources = [
      {
        path: '',
        message: err.message,
      },
    ];
  }
  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.node_env === 'development' ? err?.stack : null,
    err,
  });
};

export default globalErrorHandler;
