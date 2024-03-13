import { Router } from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

//loading the environment
dotenv.config({path: ['.env.local']});

const router = Router();
const url = process.env.MONGO_URI;

const client = new MongoClient(url);
const todoDb = 'todo-db';
const todoCollection = 'todos';
//Define routes
router.post("/todos", async (req, res) => {
  // Connect mongodb client
  await client.connect();
  // Get access to todo database
  const db = client.db( todoDb );
  //Get access to todos collection
  const collection = db.collection(todoCollection);
  // Add todo document to todos collection
  const result = await collection.insertOne({
    ...req.body,
    isCompleted: false,
    createdAt: new Date() 
  });
  // Disconnect mongodb client
  await client.close();
  // Return response
  res.json(result);
});


//Define routes
router.get("/todos", async (req, res) => {
  // Connect mongodb client
  await client.connect();
  // Get access to todo database
  const db = client.db(todoDb);
  //Get access to todos collection
  const collection = db.collection(todoCollection);
  // Find all todos from todos collection
  const limit = parseInt(req.query.limit) || 10;
  const result = await collection.find({}).limit(limit).toArray();
  // Disconnect mongodb client
  await client.close();
  // Return response
  res.json(result);
});


//Define routes
router.delete("/todos", async (req, res) => {
  // Connect mongodb client
  await client.connect();
  // Get access to todo database
  const db = client.db( todoDb );
  //Get access to todos collection
  const collection = db.collection(todoCollection);
  // Remove todo document to todos collection
  const deleteResult = await collection.deleteMany({});
  // Disconnect mongodb client
  await client.close();
  // Return response
  res.json(deleteResult);
});







// How to get all the todos that you've done before
router.get("/todos", (req, res) => {
  res.send("Get all todos!");
});

router.delete("/todos", (req, res) => {
  res.send("Delete all todos!");
});

// How to get one single todo
router.get("/todos/:id", (req, res) => {
  res.send(`Get todo with id: ${req.params.id}`);
});

router.patch("/todos/:id", (req, res) => {
  res.send(`Update todo with id: ${req.params.id}`);
});

router.delete("/todos/:id", (req, res) => {
  res.send(`Deletetodo with id : ${req.params.id}`);
});

//Export router
export default router;
