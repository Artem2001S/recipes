import { recipesReducer } from 'redux/recipes/slices/recipesSlice';
import { recipeEditFormReducer } from 'redux/recipes/slices/recipeEditFormSlice';

export const reducers = {
  recipes: recipesReducer,
  recipeEditForm: recipeEditFormReducer,
};
