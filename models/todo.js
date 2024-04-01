import { Schema, model } from "mongoose";

const todoSchema = new Schema({
    title: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() }
});

// Mongoose Step 2: Define and export a model
export const TodoModel = model('Todo', todoSchema, 'todos');