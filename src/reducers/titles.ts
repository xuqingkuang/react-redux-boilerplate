import { GET_NEXT_TITLE, TITLES } from '../constants';
import { ITitleActionReturns } from '../actions/titles';

interface ITitleState {
  title: string;
}

const initialTitleState: ITitleState = {
  title: TITLES[0],
};

// FIXME: action should be ITitleActionReturns
//        but conflict with redux/index.d.ts Action interface
const titleReducer = (state = initialTitleState, action: any): ITitleState => {
  switch (action.type) {
    case GET_NEXT_TITLE:
      const { nextIndex } = action.payload;
      const title = TITLES[nextIndex];
      return {
        title,
      };
    default:
      return state;
  }
};

export {
  ITitleState,
  titleReducer,
};
