import { configureStore } from '@reduxjs/toolkit';
import albumsReducer from './slices/albumsSlice';

export const store = configureStore({
  reducer: {
    albums: albumsReducer
  }
});
