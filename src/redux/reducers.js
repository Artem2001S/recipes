import { recipesReducer } from 'redux/recipes/slices/recipesSlice';
import { addRecipeFormReducer } from 'redux/recipes/slices/addRecipeFormSlice';
import { recipeEditFormReducer } from 'redux/recipes/slices/recipeEditFormSlice';

export const reducers = {
  recipes: recipesReducer,
  addRecipeForm: addRecipeFormReducer,
  recipeEditForm: recipeEditFormReducer,
};
