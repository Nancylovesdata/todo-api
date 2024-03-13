// This is how to import in express
// const express = require('express');

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import todosRoutes from "./routes/todos.routes.js"

//Create express app
const app = express();

//Apply middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// Use your routes
app.use(todosRoutes)

//Now it becomes a server after the above code. 
//Next is to tell the app to listern for an incoming request

//How do you do it(How to lsiten for incoming request)
app.listen(4000, () =>{
    console.log("Express app is running!")
});