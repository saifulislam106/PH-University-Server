/* eslint-disable no-undef */
import { userController } from './user.controller';
import { createStudentValidationSchema } from '../student/student.validation';
import validateRequest from '../../midlewares/validateRequest';
import { Router } from 'express';
import { createFacultyValidationSchema } from '../faculty/faculty.validation';
import { createAdminValidationSchema } from '../Admin/admin.validation';

export const userRoutes = Router();

userRoutes.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  userController.createStudent,
);

userRoutes.post(
  '/create-faculty',
  validateRequest(createFacultyValidationSchema),
  userController.createFaculty,
);

userRoutes.post(
  '/create-admin',
  validateRequest(createAdminValidationSchema),
  userController.createAdmin,
);
