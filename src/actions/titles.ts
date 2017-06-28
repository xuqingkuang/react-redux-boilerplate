import { Action } from 'redux';
import { GET_NEXT_TITLE, TITLES } from '../constants';

interface ITitleActionReturns extends Action {
  payload: {
   nextIndex: number;
  };
}

const getNextTitle = (currentTitle?: string): ITitleActionReturns => {
  let nextIndex = 0;
  if (currentTitle) {
    nextIndex = TITLES.indexOf(currentTitle) + 1;
  }
  if (nextIndex === TITLES.length) {
    nextIndex = 0;
  }
  return {
    type: GET_NEXT_TITLE,
    payload: {
      nextIndex,
    },
  };
};

export {
  ITitleActionReturns,
  getNextTitle,
};
