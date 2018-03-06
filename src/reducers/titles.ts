import { GET_NEXT_TITLE, TITLES } from '../constants';

interface ITitleAction {
  type: string;
  title: string;
}

interface ITitleState {
  title: string;
}

const initialState: ITitleState = {
  title: TITLES[0],
};

function titleReducer(state = initialState, action: ITitleAction): ITitleState {
  switch (action.type) {
    case GET_NEXT_TITLE:
      return {
        title: action.title,
      };
    default:
      return state;
  }
}

export {
  ITitleState,
  titleReducer,
};
