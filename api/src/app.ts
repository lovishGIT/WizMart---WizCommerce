import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import env from "@/config/validateEnv.config.js";


const app = express();

app.use(cors({
    origin: [env.FRONTEND_URL],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;