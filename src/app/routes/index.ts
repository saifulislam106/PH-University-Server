import { Router } from "express";
import { userRoutes } from "../modules/user/user.router";
import { StudentRoutes } from "../modules/student/student.route";
import { academicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";
import { academicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.routes";
import { academicDepartmentRoutes } from "../modules/academicDepartment/academicDepartment.routes";
import { FacultyRoutes } from "../modules/faculty/faculty.routes";
import { AdminRoutes } from "../modules/Admin/admin.route";
import { CourseRoutes } from "../modules/Course/course.route";
import { SemesterRegistrationRoutes } from "../modules/SemesterRegistration/semesterRegistration.route";
import { OfferedCourseRoutes } from "../modules/OfferedCourse/offeredCourse.route";
import { AuthRouter } from "../modules/Auth/auth.route";


const router = Router()

const moduleRoutes = [
    {
        path:"/users",
        route: userRoutes
    },
    {
        path:"/students",
        route:StudentRoutes
    },
    {
        path:"/academic-semesters",
        route:academicSemesterRoutes
    },
    {
        path:"/academic-faculties",
        route:academicFacultyRoutes
    },
    {
        path:"/academic-departments",
        route:academicDepartmentRoutes
    },
    {
        path:"/faculties",
        route:FacultyRoutes
    },
    {
        path:"/admins",
        route:AdminRoutes
    },
    {
        path:"/courses",
        route:CourseRoutes
    },
    {
        path:"/semester-registrations",
        route:SemesterRegistrationRoutes
    },
    {
        path:"/offered-courses",
        route:OfferedCourseRoutes
    },
    {
        path:"/auth",
        route:AuthRouter
    },
]

moduleRoutes.forEach(route=> router.use(route.path , route.route))

export default router;