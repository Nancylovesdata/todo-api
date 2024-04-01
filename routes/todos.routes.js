import { Router } from "express";
import { TodoModel } from "../models/todo.js";

const router = Router();

//Define routes
router.post("/todos", async (req, res) => {
  // Add todo document to todos collection
  const result = await TodoModel.create(req.body);
  // Return response
  res.json(result);
});


//Define routes
router.get("/todos", async (req, res) => {
  // Find all todos from todos collection
  const limit = parseInt(req.query.limit) || 10;
  const result = await TodoModel.find().limit(limit);
  // Return response
  res.json(result);
});


//Define routes
router.delete("/todos", async (req, res) => {
  // Remove todo document to todos collection
  const deleteResult = await TodoModel.deleteMany();
  // Return response
  res.json(deleteResult);
});

// How to get all the todos that you've done before


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
