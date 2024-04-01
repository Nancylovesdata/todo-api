// This is how to import in express
// const express = require('express');

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todosRoutes from "./routes/todos.routes.js"

//loading the environment
dotenv.config({ path: ['.env.local'] });

//Create express app
const app = express();

//Apply middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// Use your routes
app.use(todosRoutes)

//Step 1: Peform mongoose database connection
await mongoose.connect(process.env.MONGO_URI)


//Now it becomes a server after the above code. 
//Next is to tell the app to listern for an incoming request

//How do you do it(How to lsiten for incoming request)
app.listen(4000, () =>{
    console.log("Express app is running!")
});