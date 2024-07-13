/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import config from '../config';
import AppError from '../errors/AppError';
import { TErrorSources } from '../interface/error';
import handleZodError from '../errors/handleZodError';
import handleValidationError from '../errors/handleValidationError';
import handleCastError from '../errors/handleCastError';
import handleDuplicateError from '../errors/handleDuplicateError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let simplifiedError;
  let statusCode = 500;
  let message = 'Something went wrong!';
  let errorSources: TErrorSources = [{ path: '', message: 'Something went wrong' }];

  if (err instanceof ZodError) {
    simplifiedError = handleZodError(err);
  } else if (err?.name === 'ValidationError') {
    simplifiedError = handleValidationError(err);
  } else if (err?.name === 'CastError') {
    simplifiedError = handleCastError(err);
  } else if (err?.code === 11000) {
    simplifiedError = handleDuplicateError(err);
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err.message;
    errorSources = [{ path: '', message: err?.message }];
  } else if (err instanceof Error) {
    message = err.message;
    errorSources = [{ path: '', message: err?.message }];
  }

  if (simplifiedError) {
    statusCode = simplifiedError?.statusCode as number;
    message = simplifiedError?.message as string;
    errorSources = simplifiedError?.errorSources as TErrorSources;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.NODE_ENV === 'development' ? err?.stack : null,
  });
};

export default globalErrorHandler;