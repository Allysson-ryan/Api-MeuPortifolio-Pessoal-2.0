import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./lib/database";
import routes from "./routes";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(routes);

export default app;
