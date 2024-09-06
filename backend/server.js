import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import serviceRoute from "./routes/service.route.js"
import connectDB from "./lib/db.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("this is an home page.....")
})

app.listen(port, (req, res) => {
    console.log(`server is running at ${port}`);
    connectDB();
});

app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoute);