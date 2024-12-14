import { OfferedCourse } from "./offeredCourse.model"


const createOfferedCourseIntoDB= async(id:string)=>{
    const result = await OfferedCourse.create(id);
    return result
}
const getAllOfferedCourseFromDB= async()=>{
    const result = await OfferedCourse.find();
    return result
}
const getSingleOfferedCourseFromDB= async(id:string)=>{
    const result = await OfferedCourse.findById(id);
    return result
}
const updateOfferedCourseIntoDB= async(id:string)=>{
    const result = await OfferedCourse.findByIdAndUpdate(id);
    return result
}

export const OfferedCourseServices ={
    createOfferedCourseIntoDB,
    getAllOfferedCourseFromDB,
    getSingleOfferedCourseFromDB,
    updateOfferedCourseIntoDB
}