import { configureStore } from '@reduxjs/toolkit';
import { saveRecipesToLocalStorageMiddleware } from './recipes/middleware/localStorage';
import { reducers } from './reducers';

export const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveRecipesToLocalStorageMiddleware),
});
