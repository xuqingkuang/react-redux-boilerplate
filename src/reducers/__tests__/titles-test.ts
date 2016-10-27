/* Import redcers */
import { titleReducer } from '../titles';
/* Import constants */
import * as constants from '../../constants';

describe('titles reducer', () => {
  it('should return the initial state', () => {
    expect(
      titleReducer(undefined, {})
    ).toEqual({
      title: constants.TITLES[0],
    });
  });

  it('Should return correct title', () => {
    for (let i = 0; i < constants.TITLES.length; i++) {
      const action = {
        type: constants.GET_NEXT_TITLE,
        title: constants.TITLES[i],
      };
      expect(
        titleReducer(undefined, action)
      ).toEqual({
        title: constants.TITLES[i],
      });
    }
  });
});
