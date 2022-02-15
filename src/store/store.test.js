import { store } from '.';
import { initialState } from 'store/slices/albumsSlice';

describe('SaltMusic store', () => {
  it('Should return initial state', () => {
    const state = store.getState();
    expect(state.albums).toEqual(initialState);
  });
});
