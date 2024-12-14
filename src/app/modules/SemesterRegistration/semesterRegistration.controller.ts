import { SemesterRegistrationServices } from './semesterRegistration.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createSemesterRegistration = catchAsync(async (req, res) => {
  // console.log(req.query);
  const result =
    await SemesterRegistrationServices.createSemesterRegistrationIntoDB(
      req.body,
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration is created succesfully',
    data: result,
  });
});

const getAllSemesterRegistrations = catchAsync(async (req, res) => {
  // console.log(req.query);
  const result =
    await SemesterRegistrationServices.getAllSemesterRegistrationfromDB(
      req.query,
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration are retrieved succesfully',
    data: result,
  });
});

const getSingleSemesterRegistration = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await SemesterRegistrationServices.getSingleSemesterRegistrationfromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration is retrieved succesfully',
    data: result,
  });
});

const updateSemesterRegistration = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await SemesterRegistrationServices.updateSemesterRegistrationIntoDB(id,req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration is update succesfully',
    data: result,
  });
});

export const SemesterRegistrationControllers = {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
};
