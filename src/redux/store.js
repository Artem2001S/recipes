import { configureStore } from '@reduxjs/toolkit';
import { saveToLocalStorage } from './localStorage';
import { reducers } from './reducers';

export const store = configureStore({
  reducer: reducers,
  devTools: true,
});

store.subscribe(() => {
  const state = store.getState();
  const dataToSaveToLocalStorage = { recipes: state.recipes };

  saveToLocalStorage(dataToSaveToLocalStorage);
});
