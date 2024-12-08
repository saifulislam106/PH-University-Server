import express from 'express';
import validateRequest from '../../midlewares/validateRequest';
import { academicDepartmentControllers } from './academicDepartment.controller';

import { AcademicDepartmentValidation } from './academicDepartment.validation';


const router = express.Router();
router.post(
  '/create-academic-department',
  // validateRequest(
  //   AcademicDepartmentValidation.createAcademicDepartmentValidationSchema
  // ),
  academicDepartmentControllers.createAcademicDepartment
);

router.get(
  '/:departmentId',
  academicDepartmentControllers.getSingleAcademicDepartment
);

router.patch(
  '/:departmentId',
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema
  ),
  academicDepartmentControllers.updateAcademicDepartment
);

router.get('/', academicDepartmentControllers.getAcademicDepartment);

export const academicDepartmentRoutes = router;
