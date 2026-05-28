import express from 'express';
import cors from 'cors';
import { Env_Consts } from './constants/envConsts';
import connectDB from './config/db.js';
import { httpCodes } from "../constants/envConsts";

const app = express();

// Connect to MongoDB
connectDB();
// Middleware


app.use(cors({
  origin: [
    Env_Consts.FRONTEND_URL || "http://localhost:5000",
  ],
  credentials: true,
}));
app.use(cors());
app.use(express.json());
app.use(express.json({ limit: '5mb' })); // just for files if i need to

// Routes
app.get("/", (req, res) => {
  res.status(httpCodes.OK).json({
    message: "Welcome to the API",
  });
});

