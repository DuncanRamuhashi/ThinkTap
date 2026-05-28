
import { httpCodes } from "../constants/envConsts";
// Not Found Middleware
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(httpCodes.NOT_FOUND);

  next(error);
};

// Error Handler Middleware
export const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === httpCodes.OK ? httpCodes.SERVER_ERROR : res.statusCode;
  let message = err.message;

  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};