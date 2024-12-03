

import { model, Schema } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterCode, AcademicSemesterName, Months } from './academicSemester.constant';




export const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enam:AcademicSemesterName
    },
    year: {
      type: String,
      required: true,
     
    },
    code: {
      type: String,
      required: true,
      enam:AcademicSemesterCode
    },
    startMonth: {
      type: String,
      required: true,
      enam:Months
    },
    endMonth: {
      type: String,
      required: true,
      enam:Months
    }, 
  },
  {
    timestamps: true,
  },
);


export const AcademicSemester = model<TAcademicSemester>("AcademicSemester" , academicSemesterSchema)
