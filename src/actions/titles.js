import { TITLES, GET_NEXT_TITLE } from '../constants/titles'

export function getNextTitle(title) {
  let nextIndex = 0;
  if (title) {
    nextIndex = TITLES.indexOf(title) + 1;
  }
  if (nextIndex === TITLES.size) {
    nextIndex = 0;
  }
  return {
    type: GET_NEXT_TITLE,
    title: TITLES.get(nextIndex)
  }
}
