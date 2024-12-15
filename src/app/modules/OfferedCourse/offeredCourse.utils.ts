import { TSchedule } from './offeredCourse.interface';

export const hasTimeConflict =(
  assignSchedules: TSchedule[],
  newSchedule: TSchedule,
) => {
  for (const schedule of assignSchedules) {
    const assignStartTime = new Date(`2024-01-01T${schedule.startTime}:00`);
    const assignEndTime = new Date(`2024-01-01T${schedule.endTime}:00`);
    const newStartTime = new Date(`2024-01-01T${newSchedule.startTime}:00`);
    const newEndTime = new Date(`2024-01-01T${newSchedule.endTime}:00`);

    if (newStartTime < assignEndTime && newEndTime > assignStartTime) {
        return true
    }
  }
  return false
};
