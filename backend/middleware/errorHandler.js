
import { STATUS_CODES } from "../constants/httpCodes.js";
// Not Found Middleware
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(STATUS_CODES.NOT_FOUND);

  next(error);
};

// Error Handler Middleware
export const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === STATUS_CODES.OK ? STATUS_CODES.SERVER_ERROR : res.statusCode;
  let message = err.message;

  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

