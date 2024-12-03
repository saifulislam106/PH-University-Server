import express from 'express';
import { academicSemesterControllers } from './academicSemester.controller';

const router = express.Router();
router.post('/create-academic-semester' , academicSemesterControllers.createAcademicSemester)

// router.get('/:studentId', StudentControllers.getSingleStudent);

// router.delete('/:studentId', StudentControllers.deleteStudent);

// router.get('/', StudentControllers.getAllStudents);

export const academicSemesterRoutes = router;