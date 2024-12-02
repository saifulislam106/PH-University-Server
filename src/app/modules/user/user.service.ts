import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_pass as string);
  userData.role = 'student';
  userData.id = "shdjfidujggdf";

  // create a user
  const newUser = await User.create(userData);
//  console.log(newUser);
  //   create a student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id; //reference id
    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const userService = {
  createStudentIntoDB,
};
