import express from 'express';
import validateRequest from '../../midlewares/validateRequest';
import { OfferedCourseValidations } from './offeredCourse.validation';
import { OfferedCourseControllers } from './offeredCourse.controller';


const router = express.Router();
router.post(
  '/create-offered-course',
  validateRequest(
   OfferedCourseValidations.createOfferedCourseValidationSchema
  ),
  OfferedCourseControllers.createOfferedCourse,
);

router.get('/:id', OfferedCourseControllers.getSingleOfferedCourse);

router.delete('/:id', OfferedCourseControllers.deleteOfferedCourse);

router.patch(
  '/:id',
  validateRequest(
    OfferedCourseValidations.updateOfferedCourseValidationSchema
  ),
  OfferedCourseControllers.updateOfferedCourse,
);

router.get('/', OfferedCourseControllers.getAllOfferedCourse);

export const OfferedCourseRoutes = router;
