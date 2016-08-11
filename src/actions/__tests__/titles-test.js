/* Import actions */
import * as actions from '../titles';
/* Import constants */
import * as constants from '../../constants/titles';

jest.disableAutomock()

describe('titles actions', () => {
  it('should return the initial state', () => {
    expect(
      actions.getNextTitle()
    ).toEqual({
      type: constants.GET_NEXT_TITLE,
      title: constants.TITLES.get(0)
    })
  });

  it('Should return correct next title', () => {
    for (let i = 0; i < constants.TITLES.size - 1; i++) {
      expect(
        actions.getNextTitle(constants.TITLES.get(i))
      ).toEqual({
        type: constants.GET_NEXT_TITLE,
        title: constants.TITLES.get(i + 1)
      });
    }
  });

  it('Should return the first title when pass last title into reducer', () => {
    expect(
      actions.getNextTitle(constants.TITLES.get(constants.TITLES.size - 1))
    ).toEqual({
      type: constants.GET_NEXT_TITLE,
      title: constants.TITLES.get(0)
    });
  });
});
