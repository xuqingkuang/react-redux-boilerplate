import { TITLES, GET_NEXT_TITLE } from '../constants';

const initialState = {
  title: TITLES[0],
};

const titleReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case GET_NEXT_TITLE:
      return {
        title: action.title,
      };
    default:
      return state;
  };
};

export { titleReducer };
