import { NextFunction, Request, RequestHandler, Response } from "express";


// Higer order func 
const catchAsync = (fn:RequestHandler)=>{
    return (req :Request , res:Response , next :NextFunction)=>{
       Promise.resolve(fn(req , res, next)).catch((err)=>next(err))
    };
}

export default catchAsync;







