import { Router } from "express";
import { userRoutes } from "../modules/user/user.router";
import { StudentRoutes } from "../modules/student/student.route";
import { academicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";
import { academicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.routes";
import { academicDepartmentRoutes } from "../modules/academicDepartment/academicDepartment.routes";


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
]

moduleRoutes.forEach(route=> router.use(route.path , route.route))

export default router;