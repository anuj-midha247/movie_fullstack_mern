import express from "express";
import { addUser, getAllUsers } from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);

userRouter.post("/signup", addUser);

userRouter.put("/:id",)

export default userRouter;