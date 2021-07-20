import { recipesReducer } from './recipes/recipesSlice';
import { addRecipeFormReducer } from './recipes/addRecipeFormSlice';

export const reducers = {
  recipes: recipesReducer,
  addRecipeForm: addRecipeFormReducer,
};
