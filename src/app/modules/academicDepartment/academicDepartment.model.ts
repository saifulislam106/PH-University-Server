/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

export const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty:{
        type:Schema.Types.ObjectId,
        ref:"AcademicFaculty",
        
    }
  },
  {
    timestamps: true,
  },
);

// use pre midlewire hook for chaqueing exist dep. name 

academicDepartmentSchema.pre('save' , async function(next){
  const isDepartmentExist = await AcademicDepartment.findOne({name:this.name})

  if(isDepartmentExist){
    throw new AppError(httpStatus.NOT_FOUND ,"Department already exist!")
  }
  next()
})

academicDepartmentSchema.pre("findOneAndUpdate", async function(next){
  const query = this.getQuery()
  const isDepartmentExist = await AcademicDepartment.findOne(query);

  if(!isDepartmentExist){
    throw new AppError(404,"Department does not exist!")
  }
  next()

})

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema
);
