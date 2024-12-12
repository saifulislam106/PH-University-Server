
import { z } from "zod";



const createPreRequisiteCourseValidationSchema = z.object({
    course:z.string(),
    isDeleted:z.boolean().optional()
})

export const createCourseValidationSchema = z.object({
  body:z.object({
    title:z.string(),
    code:z.number(),
    prefix:z.string(),
    credits:z.number(),
    preRequisiteCourse:z.array(createPreRequisiteCourseValidationSchema).optional(),
    isDeleted:z.boolean().optional()
  })
})

const updatePreRequisiteCourseValidationSchema = z.object({
    course:z.string(),
    isDeleted:z.boolean().optional()
})
export const updateCourseValidationSchema = z.object({
  body:z.object({
    title:z.string().optional(),
    code:z.number().optional(),
    prefix:z.string().optional(),
    credits:z.number().optional(),
    preRequisiteCourses:z.array(updatePreRequisiteCourseValidationSchema).optional(),
    isDeleted:z.boolean().optional()
  })
})

const facultiesWithCourseValidationSchema = z.object({
  body: z.object({
    faculties: z.array(z.string()),
  }),
});

export const courseValidation ={
    createCourseValidationSchema,
    updateCourseValidationSchema,
    facultiesWithCourseValidationSchema
}