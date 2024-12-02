import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


const createStudent = async (req: Request, res: Response , next :NextFunction) => {
    try {
      console.log(req.body);
      const {password, student: studentData } = req.body;
      const result = await userService.createStudentIntoDB(password, studentData);
  
      sendResponse(res , {
        statusCode : httpStatus.OK,
        success: true,
        message: 'Student is created succesfully',
        data : result
      })
    } catch (err) {
      next(err);
    }
  };

  export const userController ={
    createStudent
  }