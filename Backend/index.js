import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import "dotenv/config";
import { dbConnection } from "./config/dbConnection.js";
import { authRouter } from "./routers/router.js";
import profileRouter from "./routers/profileRoutes.js";
import { checkForToken } from "./controllers/auth.controller.js";
import { siteRouter } from "./routers/travel.Scout.Routes.js";
import { v2 as cloudinary } from "cloudinary";

const app = express();
app.use(cookieParser());



cloudinary.config({
    cloud_name: "dzm4uznev",
    secure: true,
    api_key: "873185129198643",
    api_secret: "VuO5JargzAzm85d_fBPyaJN6q3E"
})

const url = cloudinary.url("delhi_bm3okt", {
    transformation: [{
        fetch_format: 'auto',
        quality: 'auto',
    }]
    // },
    // {
    //     width: 200,
    //     height: 200
    // }]
});
console.log(url);

// Transform the image: auto-crop to square aspect_ratio
const autoCropUrl = cloudinary.url('delhi_bm3okt', {
    crop: 'auto',
    gravity: 'auto',
    width: 500,
    height: 500,
});


const frontendUrl = ["https://travel-scout-liard.vercel.app", "http://localhost:5173"];
const corsOptions = {
    origin: frontendUrl,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));


app.use(authRouter);
app.use(siteRouter);
app.use("/user", profileRouter);

// Connecting the mongoDB and listen at port 
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    await dbConnection();
    console.log(`Server started at http://localhost:${PORT}`);
});
