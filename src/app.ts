import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./lib/database";
import routes from "./routes";

dotenv.config();

const app = express();

connectDB();

const allowedOrigins = process.env.CORS_ORIGIN?.split(",") || [];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(routes);

export default app;
