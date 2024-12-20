
import { z } from 'zod';
import { Days } from './offeredCourse.constant';

const timeStringSchema = z.string().refine(
  (time) => {
    const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // 00-09 10-19 20-23
    return regex.test(time);
  },
  {
    message: 'Invalid time format , expected "HH:MM" in 24 hours format',
  },
);

const createOfferedCourseValidationSchema = z.object({
  body: z.object({
    semesterRegistration: z.string(),
    academicFaculty: z.string(),
    academicDepartment: z.string(),
    course: z.string(),
    faculty: z.string(),
    section: z.number(),
    maxCapacity: z.number(),
    days: z.array(z.enum([...Days] as [string, ...string[]])),
    startTime: timeStringSchema,
    endTime: timeStringSchema,
  }).refine((body) => {
    const startTime = new Date(`2024-01-01T${body.startTime}:00`)
    const endTime = new Date(`2024-01-01T${body.endTime}:00`)
    return endTime> startTime
  },
{
  message: 'Start time should be before End time !  ',
}),
});

const updateOfferedCourseValidationSchema = z.object({
  body: z
    .object({
      faculty: z.string(),
      section: z.number(),
      maxCapacity: z.number(),
      days: z.array(z.enum([...Days] as [string, ...string[]])),
      startTime:timeStringSchema,
      endTime: timeStringSchema
    }).refine((body) => {
      const startTime = new Date(`2024-01-01T${body.startTime}:00`)
      const endTime = new Date(`2024-01-01T${body.endTime}:00`)
      return endTime> startTime
    },
  {
    message: 'Start time should be before End time !  ',
  })
});


export const OfferedCourseValidations = {
  createOfferedCourseValidationSchema,
  updateOfferedCourseValidationSchema,
};
