
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { OfferedCourseServices } from "./offeredCourse.service";





const createOfferedCourse = catchAsync(async (req, res) => {
    const result = await OfferedCourseServices.createOfferedCourseIntoDB( req.body );
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Offerd course is create succesfully',
      data: result,
    });
  });

const getAllOfferedCourse = catchAsync(async (req, res) => {
   
    const result = await OfferedCourseServices.getAllOfferedCourseFromDB(  );
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Offerd course are retrieved succesfully',
      data: result,
    });
  });

const getSingleOfferedCourse = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await OfferedCourseServices.getSingleOfferedCourseFromDB( id );
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Offerd course is retrieved succesfully',
      data: result,
    });
  });

const updateOfferedCourse = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await OfferedCourseServices. updateOfferedCourseIntoDB( id ,req.body );
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Offerd course is update succesfully',
      data: result,
    });
  });
  
const deleteOfferedCourse = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await OfferedCourseServices.deleteOfferedCourseFromDB( id );
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Offerd course is delete succesfully',
      data: result,
    });
  });

export const OfferedCourseControllers ={
  createOfferedCourse,
  getSingleOfferedCourse,
  getAllOfferedCourse,
  updateOfferedCourse,
  deleteOfferedCourse
}