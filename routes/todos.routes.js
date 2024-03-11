import { Router } from "express";

const router = Router();

//Define routes
router.post("/todos", (req, res) => {
  res.json(req.body);
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
