import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';

import catchAsync from '../../utils/catchAsync';
import { CourseServices } from './course.service';

const createCourses = catchAsync(async (req, res) => {
  // console.log(req.query);
  const result = await CourseServices.createCourseIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is created succesfully',
    data: result,
  });
});
const getAllCourses = catchAsync(async (req, res) => {
  // console.log(req.query);
  const result = await CourseServices.getAllCoursefromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course are retrieved succesfully',
    data: result,
  });
});

const getSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.getSingleCoursefromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is retrieved succesfully',
    data: result,
  });
});

const updateCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { course } = req.body;
  const result = await CourseServices.updateCourseIntoDB(id, course);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is update succesfully',
    data: result,
  });
});

const deleteCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.deleteCoursefromDB(
    id
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is deleted succesfully',
    data: result,
  });
});

const assignFacultyWithCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const {faculties}=req.body;
  const result = await CourseServices.assignFacultyCourseIntoDB(
    courseId,faculties
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Assign faculty course succesfully',
    data: result,
  });
});

const removeFacultyWithCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const {faculties}=req.body;
  const result = await CourseServices.removeFacultyCourseIntoDB(
    courseId,faculties
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'remove faculty course succesfully',
    data: result,
  });
});

export const CourseControllers = {
  createCourses,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
  assignFacultyWithCourse,
  removeFacultyWithCourse
};
