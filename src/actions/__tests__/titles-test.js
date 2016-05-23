/* Import actions */
import * as actions from '../titles';
/* Import constants */
import * as constants from '../../constants/titles';

jest.disableAutomock()

describe('titles actions', () => {
  it('Should return correct title for defined title', () => {
    for (let i = 0; i < constants.TITLES.size; i++) {
      expect(
        actions.getNextTitle(constants.TITLES.get(i))
      ).toEqual({
        type: constants.GET_NEXT_TITLE,
        title: constants.TITLES.get(i)
      });
    }
  });

  it('Should return custom title', () => {
    const title = 'Hello Unit Test';
    expect(
      actions.getNextTitle(title)
    ).toEqual({
      type: constants.GET_NEXT_TITLE,
      title: title
    });
  });
});
