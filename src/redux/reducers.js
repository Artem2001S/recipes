import { recipesReducer } from './recipes/recipesSlice';
import { addRecipeFormReducer } from './recipes/addRecipeFormSlice';
import { searchRecipeFormReducer } from './recipes/searchRecipeForm';
import { recipeEditFormReducer } from './recipes/recipeEditForm';

export const reducers = {
  recipes: recipesReducer,
  addRecipeForm: addRecipeFormReducer,
  searchRecipeForm: searchRecipeFormReducer,
  recipeEditForm: recipeEditFormReducer,
};
