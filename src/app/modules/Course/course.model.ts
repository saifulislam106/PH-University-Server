import { model, Schema } from "mongoose";
import { TCourse, TpreRequisiteCourses } from "./course.interface";


const preRequisiteCoursesSchema = new Schema<TpreRequisiteCourses>({
    courses:{
        type:Schema.Types.ObjectId,
        required:true,
        unique:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
},
{
    _id:false
})


const courseSchema = new Schema<TCourse>({
    title:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    code:{
        type:Number,
        required:true,
        
    },
    prefix:{
        type:String,
        required:true,
       
    },
    credit:{
        type:Number,
        required:true,
        
    },
    preRequisiteCourses:[preRequisiteCoursesSchema],
    isDeleted:{
        type:Boolean,
        default:false
    },
},{
    timestamps:true
}
)

export const Course = model<TCourse>("Course" , courseSchema)