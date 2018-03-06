/* Import redcers */
import { titleReducer } from '../titles';
/* Import constants */
import * as constants from '../../constants';

describe('titles reducer', () => {
  it('should return the initial state', () => {
    expect(
      titleReducer(undefined, {}),
    ).toEqual({
      title: constants.TITLES[0],
    });
  });

  it('Should return correct title', () => {
    for (const title of constants.TITLES) {
      const action = {
        type: constants.GET_NEXT_TITLE,
        title,
      };
      expect(
        titleReducer(undefined, action),
      ).toEqual({
        title,
      });
    }
  });
});
