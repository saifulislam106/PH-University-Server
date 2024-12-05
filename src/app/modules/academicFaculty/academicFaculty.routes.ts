import express from 'express';
import validateRequest from '../../midlewares/validateRequest';
import { academicFacultyControllers } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();
router.post(
  '/create-academic-faculty',
  validateRequest(
   AcademicFacultyValidation.createAcademicFacultyValidationSchema
  ),
  academicFacultyControllers.createAcademicFaculty
);

router.get(
  '/:facultyId',
  academicFacultyControllers.getSingleAcademicFaculty
);

router.patch(
  '/:facultyId',
  validateRequest(
  AcademicFacultyValidation.updateAcademicFacultyValidationSchema
  ),
  academicFacultyControllers.updateAcademicFaculty
);

router.get('/', academicFacultyControllers.getAcademicFaculty);

export const academicFacultyRoutes = router;
