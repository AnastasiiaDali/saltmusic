import { createSlice } from '@reduxjs/toolkit';
import getCategories from 'helpers/getCategories';
import getReleaseDates from 'helpers/getReleaseDates';
import mockFavSongs from 'assets/mocks/mockFavSongs';

export const initialState = {
  categories: [],
  releaseDates: [],
  favoriteSongs: mockFavSongs
};

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    setInitialStates(state, action) {
      const categories = getCategories(action.payload);
      const releaseDates = getReleaseDates(action.payload);

      state.categories = categories;
      state.releaseDates = releaseDates;
    },
    setFavoriteSongs(state, action) {
      const index = state.favoriteSongs.findIndex((album) => album.id === action.payload.id);
      if (index > -1) {
        state.favoriteSongs.splice(index, 1);
      } else {
        state.favoriteSongs.push(action.payload);
      }
    }
  }
});

export const { setInitialStates, setFavoriteSongs } = albumsSlice.actions;

export const categoriesSelector = (state) => state.albums.categories;
export const releaseDatesSelector = (state) => state.albums.releaseDates;
export const favoriteAlbumsSelector = (state) => state.albums.favoriteSongs;

export default albumsSlice.reducer;
