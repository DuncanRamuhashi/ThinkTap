import dotenv from 'dotenv';

dotenv.config();

export const Env_Consts = {
  PORT: process.env.PORT || 5000,
  CONNECTION_STRING: process.env.CONNECTION_STRING,
  NODE_ENV: process.env.NODE_ENV,
  JWT_SECRET: process.env.JWT_SECRET,
  FRONTEND_URL: process.env.FRONTEND_URL,
};