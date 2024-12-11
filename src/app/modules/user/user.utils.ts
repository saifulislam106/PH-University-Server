import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne({ role: 'student' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();

  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generateStudentId = async (payload: TAcademicSemester) => {
  let currentId = (0).toString();

  const lastStudentId = await findLastStudentId();

  const lastStudentYear = lastStudentId?.substring(0, 4); //2030
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6); //2030 01
  const currentYear = payload.year;
  const currentSemesterCode = payload.code;

  if (
    lastStudentId &&
    lastStudentYear === currentYear &&
    lastStudentSemesterCode === currentSemesterCode
  ) {
    currentId = lastStudentId.substring(6);
  }

  let incremestId = (Number(currentId) + 1).toString().padStart(4, '0');

  incremestId = `${payload.year}${payload.code}${incremestId}`;
  return incremestId;
};

// Faculty Id

const findLastFacultyId = async () => {
  const lastFaculty = await User.findOne({ role: 'faculty' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();

  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
};

export const generateFacultyId = async () => {
  let currentId = (0).toString();

  const lastFacultyId = await findLastFacultyId();

  if (lastFacultyId) {
    currentId = lastFacultyId.substring(2);
  }

  let incremestId = (Number(currentId) + 1).toString().padStart(4, '0');

  incremestId = `F-${incremestId}`;
  return incremestId;
};

// Admin ID
export const findLastAdminId = async () => {
  const lastAdmin = await User.findOne(
    {
      role: 'admin',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastAdmin?.id ? lastAdmin.id.substring(2) : undefined;
};

export const generateAdminId = async () => {
  let currentId = (0).toString();
  const lastAdminId = await findLastAdminId();

  if (lastAdminId) {
    currentId = lastAdminId.substring(2);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `A-${incrementId}`;
  return incrementId;
};
