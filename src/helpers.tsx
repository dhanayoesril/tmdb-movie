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

export const convertCategoryParams = (category: string) => {
  switch (category) {
    case 'popular':
      return 'popular';
    case 'now-playing':
      return 'now_playing';
    case 'upcoming':
      return 'upcoming';
    case 'top-rated':
      return 'top_rated';
    default:
      return category;
  }
};

export const convertCategoryTitle = (category: string) => {
  switch (category) {
    case 'popular':
      return 'Popular';
    case 'now-playing':
      return 'Now Playing';
    case 'upcoming':
      return 'Upcoming';
    case 'top-rated':
      return 'Top Rated';
    default:
      return category;
  }
};
