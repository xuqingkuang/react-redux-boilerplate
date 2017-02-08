import { GET_NEXT_TITLE, TITLES } from '../constants';

const getNextTitle = (title?: string) => {
  let nextIndex = 0;
  if (title) {
    nextIndex = TITLES.indexOf(title) + 1;
  }
  if (nextIndex === TITLES.length) {
    nextIndex = 0;
  }
  return {
    type: GET_NEXT_TITLE,
    title: TITLES[nextIndex],
  };
};

export {
  getNextTitle,
};
