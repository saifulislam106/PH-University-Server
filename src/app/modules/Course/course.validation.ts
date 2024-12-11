
import { z } from "zod";



const createPreRequisiteCourseValidationSchema = z.object({
    courses:z.string(),
    isDeleted:z.boolean().optional()
})

export const createCourseValidationSchema = z.object({
  body:z.object({
    title:z.string(),
    code:z.number(),
    prefix:z.string(),
    credit:z.number(),
    preRequisiteCourse:z.array(createPreRequisiteCourseValidationSchema).optional(),
    isDeleted:z.boolean().optional()
  })
})

const updatePreRequisiteCourseValidationSchema = z.object({
    courses:z.string(),
    isDeleted:z.boolean().optional()
})

export const updateCourseValidationSchema = z.object({
  body:z.object({
    title:z.string(),
    code:z.number(),
    prefix:z.string(),
    credit:z.number(),
    preRequisiteCourse:z.array(updatePreRequisiteCourseValidationSchema).optional(),
    isDeleted:z.boolean().optional()
  })
})

export const courseValidation ={
    createCourseValidationSchema,
    updateCourseValidationSchema
}