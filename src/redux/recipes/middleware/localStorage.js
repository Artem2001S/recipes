import { saveToLocalStorage } from 'redux/localStorage';
import {
  recipeAdded,
  recipeDeleted,
  recipeEdited,
} from 'redux/recipes/recipesSlice';

export const saveRecipesToLocalStorageMiddleware =
  (store) => (next) => (action) => {
    next(action);

    if (
      [recipeAdded.type, recipeEdited.type, recipeDeleted.type].includes(
        action.type
      )
    ) {
      const state = store.getState();
      const dataToSaveToLocalStorage = { recipes: state.recipes };

      saveToLocalStorage(dataToSaveToLocalStorage);
    }
  };
