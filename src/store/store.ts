import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import { booksApi } from './services/books';
import searchReducer from './features/search';
import favoritesReducer from './features/favorites';

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    search: searchReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
