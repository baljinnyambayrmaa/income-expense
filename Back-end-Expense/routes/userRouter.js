import express from "express";
import { getLoggedInUserService } from "../controllers/userController.js";
import { createNewUserService } from "../controllers/userController.js";
import { loginUser } from "../middleware/loginUser.js";
import { tokenCheck } from "../middleware/tokenCheck.js";

//Router declare to variable
const userRouter = express.Router();

//post functions
userRouter.post("/users", createNewUserService);
userRouter.post("/users/login", loginUser, getLoggedInUserService);
userRouter.get("/users/refresh/:token", tokenCheck);

export default userRouter;
