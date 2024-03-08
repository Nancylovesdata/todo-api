// This is how to import in express
// const express = require('express');

import express from "express";

//Create express app
const app = express();

// Define your route
// app.get( '/', (req,res)=>{
//     console.log(req.query,req.headers);
//     res.send("Welcome eee");
// });


app.get( '/ping', (req,res)=>{
    console.log(req.query,req.headers);
    res.send("Ping pong sap!");
});

// How to serve a file, like let your html file
app.get('/file', (req, res) =>{
    console.log(process.cwd())
    res.sendFile(process.cwd() +"/index.html");

});


//Now it becomes a server after the above code. 
//Next is to tell the app to listern for an incoming request

//How do you do it(How to lsiten for incoming request)
app.listen(4000, () =>{
    console.log("Express app is running!")
});