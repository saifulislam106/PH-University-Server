

import { model, Schema } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterCode, AcademicSemesterName, Months } from './academicSemester.constant';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';




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
// semester validation 
academicSemesterSchema.pre('save' , async function (next){
  const isSemesterExists = await AcademicSemester.findOne({
    year: this.year,
    name:this.name
  })
  if(isSemesterExists){
    throw new AppError(httpStatus.NOT_FOUND ,'Semester is already Exist!')
  }
  next()
})

export const AcademicSemester = model<TAcademicSemester>("AcademicSemester" , academicSemesterSchema)
