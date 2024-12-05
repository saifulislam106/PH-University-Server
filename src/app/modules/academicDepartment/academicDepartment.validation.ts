import { z } from 'zod';

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic dep. must be string',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Faculty name must be string',
    }),
  }),
});
const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic dep. must be string',
    }).optional(),
    academicFaculty: z.string({
      invalid_type_error: 'Faculty name must be string',
    }).optional(),
  }),
});


export const AcademicDepartmentValidation = {
createAcademicDepartmentValidationSchema,
updateAcademicDepartmentValidationSchema
};
