import { recipesReducer } from './recipes/recipesSlice';
import { addRecipeFormReducer } from './recipes/addRecipeFormSlice';
import { searchRecipeFormReducer } from './recipes/searchRecipeForm';
import { recipePageReducer } from './recipes/recipePageSlice';

export const reducers = {
  recipes: recipesReducer,
  addRecipeForm: addRecipeFormReducer,
  searchRecipeForm: searchRecipeFormReducer,
  recipePage: recipePageReducer,
};
