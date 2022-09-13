import { utcToZonedTime, format } from 'date-fns-tz';

const EEST_TIME_ZONE = 'Europe/Riga';
const DATE_FORMAT = 'dd.MM.yyyy HH:mm';

function formatInEEST(isoDate) {
  const date = utcToZonedTime(isoDate, EEST_TIME_ZONE);
  return `${format(date, DATE_FORMAT, { timeZone: EEST_TIME_ZONE })} EEST`;
}

export const selectedPostsEEST = (state) => state.selectedPosts
  .map((post) => ({ id: post.id, selectedAt: formatInEEST(post.selectedAt) }));

export const selectedPostsCount = (state) => state.selectedPosts.length;

export const totalPostsCount = (state) => state.totalPostsCount || 0;
