import { TITLES, GET_NEXT_TITLE } from '../constants/titles'

const initialState = {
  title: TITLES.get(0)
}

export default function getNextTitle(state = initialState, action) {
  switch(action.type) {
    case GET_NEXT_TITLE:
      return {
        title: action.title
      }
    default:
      return state
  }
}
