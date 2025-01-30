import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbconnection } from './database/dbconnection.js';
import reservationRouter from './routes/reservationRoute.js';
import { errorMiddleware } from './error/error.js';

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(cors({
    origin: [process.env.FRONTEND_URL, 'http://localhost:5174'], // Add the frontend URL here
    methods: ["POST"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/reservation', reservationRouter);
app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  });
});

// Database connection
dbconnection();

// Error middleware
app.use(errorMiddleware);

export default app;
