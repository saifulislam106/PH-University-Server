import { model, Schema } from 'mongoose';
import { TOfferedCourse } from './offeredCourse.interface';
import { Days } from './offeredCourse.constant';

const offeredCourseSchema = new Schema<TOfferedCourse>(
  {
    semesterRegistration: {
      type: Schema.Types.ObjectId,
      ref: 'SemesterRegistration',
      unique: true,
    },
    academicSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      unique: true,
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicDepartment',
      unique: true,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      unique: true,
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: 'Faculty',
      unique: true,
    },
    maxCapacity: {
      type: Number,
      required: true,
    },
    section: {
      type: Number,
      required: true,
    },
    days: [
      {
        type: String,
        enum: Days,
      },
    ],
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const OfferedCourse = model<TOfferedCourse>('OfferedCourse' ,offeredCourseSchema)