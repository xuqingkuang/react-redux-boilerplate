/* Import redcers */
import reducer from '../titles';
/* Import constants */
import * as constants from '../../constants/titles';

jest.disableAutomock()

describe('titles reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      title: constants.TITLES.get(0)
    })
  });

  it('Should return correct next title', () => {
    for (let i = 0; i < constants.TITLES.size - 1; i++) {
      const action = {
        type: constants.GET_NEXT_TITLE,
        title: constants.TITLES.get(i)
      }
      expect(
        reducer(undefined, action)
      ).toEqual({
        title: constants.TITLES.get(i + 1)
      });
    }
  });

  it('Should return the first title when pass last title into reducer', () => {
    const action = {
      type: constants.GET_NEXT_TITLE,
      title: constants.TITLES.get(constants.TITLES.size - 1)
    }
    expect(
      reducer(undefined, action)
    ).toEqual({
      title: constants.TITLES.get(0)
    });
  });
})
