/* Import redcers */
import reducer from '../titles';
/* Import constants */
import * as constants from '../../constants/titles';

jest.unmock( '../titles');
jest.unmock( '../../constants/titles');

describe('titles reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      title: constants.titles[0]
    })
  });

  it('Should return correct next title', () => {
    for (let i = 0; i < constants.titles.length - 1; i++) {
      const action = {
        type: constants.GET_NEXT_TITLE,
        title: constants.titles[i]
      }
      expect(
        reducer(undefined, action)
      ).toEqual({
        title: constants.titles[i + 1]
      });
    }
  });

  it('Should return the first title when pass last title into reducer', () => {
    const action = {
      type: constants.GET_NEXT_TITLE,
      title: constants.titles[constants.titles.length - 1]
    }
    expect(
      reducer(undefined, action)
    ).toEqual({
      title: constants.titles[0]
    });
  });
})
