/* eslint-disable no-undef */
import { userController } from './user.controller';
import { studentValidationSchema } from '../student/student.validation';
import validateRequest from '../../midlewares/validateRequest';
import { Router } from 'express';

export const userRoutes = Router();


userRoutes.post(
  '/create-student',
  validateRequest(studentValidationSchema),
  userController.createStudent,
);
