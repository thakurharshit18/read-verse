import express from 'express';
import dotenv from 'dotenv';
import connectDB from './lib/db.js';
import cors from "cors";
const app = express();
import userroute from './routes/userroute.js';
import productroute from './routes/productroute.js';
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/users",userroute);
app.use("/api/products",productroute);


app.listen(process.env.PORT,()=>{{
    console.log("server has started");
    connectDB();
}})