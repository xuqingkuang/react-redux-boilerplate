import { titles, GET_NEXT_TITLE } from '../constants/titles'

const initialState = {
  title: titles[0]
}

export default function getNextTitle(state = initialState, action) {
  if (action.type === GET_NEXT_TITLE) {
    let nextIndex = titles.indexOf(action.title) + 1;
    if (nextIndex === titles.length) {
      nextIndex = 0;
    };
    return {title: titles[nextIndex]}
  }
  return state
};
