import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import "dotenv/config";
import { dbConnection } from "./config/dbConnection.js";
import { router } from "./routers/router.js";

const app = express();
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json());
app.use(morgan("dev"));
app.use(router);

// Connecting the mongoDB and listen at port 
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    await dbConnection();
    console.log(`Server started at http://localhost:${PORT}`);
});
