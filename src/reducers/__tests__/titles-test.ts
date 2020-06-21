/* Import redcers */
import { titleReducer } from '../titles';
/* Import constants */
import * as constants from '../../constants';

describe('titles reducer', () => {
  it('should return the initial state', () => {
    expect(
      titleReducer(undefined, {
        type: constants.GET_NEXT_TITLE,
        title: constants.TITLES[0],
      }),
    ).toEqual({
      title: constants.TITLES[0],
    });
  });

  it('Should return correct title', () => {
    constants.TITLES.forEach((title) => {
      const action = {
        type: constants.GET_NEXT_TITLE,
        title,
      };
      expect(
        titleReducer(undefined, action),
      ).toEqual({
        title,
      });
    });
  });
});
