import express from "express";
import { removeUser } from "../controllers/userController.js";
import {
  createTask,
  findUniqueTask,
  isTaskDone,
  listUserTask,
  removeTask,
  setTaskDone,
  updateTask,
} from "../controllers/taskController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.delete("/delete-user", auth, removeUser);

router.post("/create-task", auth, createTask);

router.delete("/remove-task", auth, removeTask);

router.patch("/update-task", auth, updateTask);

router.patch("/done-task", auth, setTaskDone);

router.get("/find-task", auth, findUniqueTask);

router.patch("/setdone-task", auth, isTaskDone);

router.get("/taskList", auth, listUserTask);

export default router;
