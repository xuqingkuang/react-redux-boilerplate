import { GET_NEXT_TITLE, TITLES } from '../constants';

interface ITitleAction {
  type: string;
  title: string;
}

const initialState = {
  title: TITLES[0],
};

const titleReducer = (state = initialState, action: ITitleAction) => {
  switch (action.type) {
    case GET_NEXT_TITLE:
      return {
        title: action.title,
      };
    default:
      return state;
  }
};

export {
  titleReducer,
};
