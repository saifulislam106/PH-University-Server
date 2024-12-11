import { TCourse } from "./course.interface";
import { Course } from "./course.model";



const createCourseIntoDB = async (payload: TCourse) => {
  const result = await Course.create(payload);
  return result;
};

const getAllCoursefromDB = async () => {
  const result = await Course.find().populate("academicFaculty");
  return result;
};

const getSingleCoursefromDB = async (id: string) => {
  const result = await Course.findById(id).populate("academicFaculty");
  return result;
};

const updateCourseIntoDB = async (
  id: string,
  payload: Partial<TCourse>,
) => {
  const result = await Course.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const CourseServices = {
 createAcademicDepartmentIntoDB,
 getAllAcademicDepartmentfromDB,
 getSingleAcademicDepartmentfromDB,
 updateAcademicDepartmentIntoDB
};
