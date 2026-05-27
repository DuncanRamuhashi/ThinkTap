import express from 'express';
import cors from 'cors';
import { Env_Consts } from './constants/envConsts.js';
import connectDB from './config/db.js';
import { Env_Consts } from "./constants/envConsts";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.json({ limit: '5mb' })); // just for files if i need to