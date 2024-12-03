import { Router } from "express";
import { userRoutes } from "../modules/user/user.router";
import { StudentRoutes } from "../modules/student/student.route";
import { academicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";


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
]

moduleRoutes.forEach(route=> router.use(route.path , route.route))

export default router;