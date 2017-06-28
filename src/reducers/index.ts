import { ReducersMapObject } from 'redux';
import { ITitleState, titleReducer } from './titles';

interface IState {
  titleReducer: ITitleState;
}

export {
  IState,
  titleReducer,
};
