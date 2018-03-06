import { history, store } from '../prepare';

describe('Prepare output', () => {
  it('history should correctly', () => {
    expect(history).toEqual(history);
  });
  it('store should correctly', () => {
    expect(store).toEqual(store);
  });
});
