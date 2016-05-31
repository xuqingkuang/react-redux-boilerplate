import { TITLES, GET_NEXT_TITLE } from '../constants/titles'

const initialState = {
  title: TITLES.get(0)
}

export default function getNextTitle(state = initialState, action) {
  if (action.type === GET_NEXT_TITLE) {
    let nextIndex = 0;
    if (action.title) {
      nextIndex = TITLES.indexOf(action.title) + 1;
    }
    if (nextIndex === TITLES.size) {
      nextIndex = 0;
    }
    return { title: TITLES.get(nextIndex) }
  }
  return state
}
