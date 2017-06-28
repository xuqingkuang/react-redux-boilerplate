/* Import constants */
import * as constants from '../../constants';
/* Import actions */
import { getNextTitle } from '../titles';

describe('titles actions', () => {
  it('should return the initial state', () => {
    expect(
      getNextTitle(),
    ).toEqual({
      type: constants.GET_NEXT_TITLE,
      payload: {
        nextIndex: 0,
      },
    });
  });

  it('Should return correct next title', () => {
    for (let i = 0; i < constants.TITLES.length - 1; i++) {
      expect(
        getNextTitle(constants.TITLES[i]),
      ).toEqual({
        type: constants.GET_NEXT_TITLE,
        payload: {
          nextIndex: i + 1,
        },
      });
    }
  });

  it('Should return the first title when pass last title into reducer', () => {
    expect(
      getNextTitle(constants.TITLES[constants.TITLES.length - 1]),
    ).toEqual({
      type: constants.GET_NEXT_TITLE,
      payload: {
        nextIndex: 0,
      },
    });
  });
});
