
import { Types } from "mongoose";

export type TpreRequisiteCourses={
    courses:Types.ObjectId;
    isDeleted:boolean
}

export type TCourse ={
    title: string;
    code:number;
    prefix:string;
    credit:number;
    preRequisiteCourses:[TpreRequisiteCourses];
    isDeleted?:boolean
}