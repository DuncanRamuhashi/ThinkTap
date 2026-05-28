import express from "express";
import cors from "cors";
import { STATUS_CODES } from "./constants/httpCodes.js";
import { Env_Consts } from "./constants/envConsts.js";
import connectDB from "./config/db.js";

import { errorHandler, notFound } from "./middleware/errorHandler.js";

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

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.status(STATUS_CODES.OK).json({
    message: "Welcome to the API",
  });
});

// Error Middleware
app.use(notFound);
app.use(errorHandler);

// Start Server
app.listen(Env_Consts.PORT, () => {
  console.log(`Server running on port ${Env_Consts.PORT}`);
});

export default app;