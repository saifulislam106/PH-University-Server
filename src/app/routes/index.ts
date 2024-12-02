import { Router } from "express";
import { userRoutes } from "../modules/user/user.router";
import { StudentRoutes } from "../modules/student/student.route";


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
]

moduleRoutes.forEach(route=> router.use(route.path , route.route))

export default router;