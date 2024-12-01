import { Router } from "express";
import { userController } from "./user.controller";


export const userRouter = Router()

userRouter.post('/create-student' , userController.createStudent)