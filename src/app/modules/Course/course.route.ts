
import express from 'express';
import validateRequest from '../../midlewares/validateRequest';
import { CourseControllers } from './course.controller';
import { courseValidation, createCourseValidationSchema,} from './course.validation';


const router = express.Router();
router.post(
  '/create-course',
  validateRequest(
   createCourseValidationSchema
  ),
  CourseControllers.createCourses
);

router.get(
  '/:id',
  CourseControllers.getSingleCourse
);
router.delete(
  '/:id',
  CourseControllers.deleteCourse
);

router.put(
  '/:courseId/assign-facultise',
  validateRequest(courseValidation.facultiesWithCourseValidationSchema),
  CourseControllers.assignFacultyWithCourse
);

router.delete(
  '/:courseId/remove-facultise',
  validateRequest(courseValidation.facultiesWithCourseValidationSchema),
  CourseControllers.removeFacultyWithCourse
);

router.patch(
  '/:id',
  validateRequest(
 courseValidation.updateCourseValidationSchema
  ),
  CourseControllers.updateCourse
);

router.get('/', CourseControllers.getAllCourses);

export const CourseRoutes = router;
