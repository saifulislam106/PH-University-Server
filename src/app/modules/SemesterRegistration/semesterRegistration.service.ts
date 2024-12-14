import { RegistrationStatus } from './semesterRegistration.constant';
// import mongoose from "mongoose";
import QueryBuilder from '../../builder/QueryBuilder';
import { TSemesterRegistration } from './semesterRegistration.interface';
import { SemesterRegistration } from './semesterRegistration.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { AcademicSemester } from '../academicSemester/academicSemester.model';

const createSemesterRegistrationIntoDB = async (
  payload: TSemesterRegistration,
) => {
  const academicSemister = payload?.academicSemester;

  // chaqe if is status = 'UPCOMING'/'ONGOING' dont course registered

  const isThereUpcomingOrOngoingSemester = await SemesterRegistration.findOne({
    $or: [
      { status: RegistrationStatus?.UPCOMING },
      { status: RegistrationStatus?.ONGOING },
    ],
  });
  if (isThereUpcomingOrOngoingSemester) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `There is aready an ${isThereUpcomingOrOngoingSemester.status} registered semester !`,
    );
  }

  // cheqe if academic semester isExists
  const isAcademicSemesterExists =
    await AcademicSemester.findById(academicSemister);
  if (!isAcademicSemesterExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Semester not Found');
  }

  // cheqe if semester registration already register
  const isSemesterRegistrationExists = await SemesterRegistration.findOne({
    academicSemester: academicSemister,
  }); // or (academicSemester) hence value & key same
  if (isSemesterRegistrationExists) {
    throw new AppError(httpStatus.CONFLICT, 'Semester is Already registered');
  }

  const result = await SemesterRegistration.create(payload);
  return result;
};

const getAllSemesterRegistrationfromDB = async (
  query: Record<string, unknown>,
) => {
  const courseQuery = new QueryBuilder(
    SemesterRegistration.find().populate('academicSemester'),
    query,
  )
    .filter()
    .sort()
    .fields()
    .paginate();

  const result = await courseQuery.queryModel;

  return result;
};

const getSingleSemesterRegistrationfromDB = async (id: string) => {
  const result =
    await SemesterRegistration.findById(id).populate('academicSemester');
  return result;
};

const updateSemesterRegistrationIntoDB = async (
  id: string,
  payload: Partial<TSemesterRegistration>,
) => {
  const isSemesterRegistrationExists = await SemesterRegistration.findById(id);
  if (!isSemesterRegistrationExists) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Registration semester dose not exists',
    );
  }

  const currentSemesterStatus = isSemesterRegistrationExists?.status;
  const requestStatus = payload?.status;

  if (currentSemesterStatus === RegistrationStatus.ENDED) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `Semester is Already ${currentSemesterStatus}`,
    );
  }

  // UPCOMING --> ONGOING --> ENDED
  if (
    currentSemesterStatus === RegistrationStatus.UPCOMING &&
    requestStatus === RegistrationStatus.ENDED
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `You can not directly change status from ${currentSemesterStatus} to ${requestStatus}`,
    );
  }

  if (
    currentSemesterStatus === RegistrationStatus.ONGOING &&
    requestStatus === RegistrationStatus.UPCOMING
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `You can not directly change status from ${currentSemesterStatus} to ${requestStatus}`,
    );
  }

  const result = await SemesterRegistration.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const SemesterRegistrationServices = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationfromDB,
  getSingleSemesterRegistrationfromDB,
  updateSemesterRegistrationIntoDB,
};
