import { Router } from 'express';
import { SemesterRegistrationControllers } from './semesterRegistration.controller';
import validateRequest from '../../midlewares/validateRequest';
import { SemesterRegistrationValidation } from './semesterRegistration.validation';

const router = Router();

router.post(
  '/create-semester-registration',
  validateRequest(
    SemesterRegistrationValidation.createSemesterRegistrationValidateSchema,
  ),
  SemesterRegistrationControllers.createSemesterRegistration,
);

router.get(
  '/:id',
  SemesterRegistrationControllers.getSingleSemesterRegistration,
);

router.patch(
  '/:id',
  validateRequest(
    SemesterRegistrationValidation.updateSemesterRegistrationValidateSchema,
  ),
  SemesterRegistrationControllers.updateSemesterRegistration,
);

router.get('/', SemesterRegistrationControllers.getAllSemesterRegistrations);

export const SemesterRegistrationRoutes = router;
