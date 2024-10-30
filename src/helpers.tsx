import { SHORT_MONTH } from './constants/general';

export const formatDate = (payload: string) => {
  if (!payload) return '-';
  const date = new Date(payload);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `${day} ${SHORT_MONTH[monthIndex]} ${year}`;
};

export const toHoursAndMinutes = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return { hours, minutes };
};
