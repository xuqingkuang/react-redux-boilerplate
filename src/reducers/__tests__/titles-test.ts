/* Import redcers */
import { titleReducer } from '../titles';
/* Import constants */
import * as constants from '../../constants';

describe('titles reducer', () => {
  it('should return the initial state', () => {
    const action = {
      type: 'ANTOHER_ACTION',
      payload: {
        nextIndex: 123,
      },
    };
    expect(
      titleReducer(undefined, action),
    ).toEqual({
      title: constants.TITLES[0],
    });
  });

  it('Should return correct title', () => {
    for (let i = 0; i < constants.TITLES.length; i++) {
      const action = {
        type: constants.GET_NEXT_TITLE,
        payload: {
          nextIndex: i,
        },
      };
      expect(
        titleReducer(undefined, action),
      ).toEqual({
        title: constants.TITLES[i],
      });
    }
  });
});
