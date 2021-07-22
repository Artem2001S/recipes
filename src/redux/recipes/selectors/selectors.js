import { createSelector } from 'reselect';
import { recipesSelectors } from '../slices/recipesSlice';

export const getRecipes = recipesSelectors.selectAll;
export const getRecipesEntities = recipesSelectors.selectEntities;

export const getRecipeEditFormState = (state) => state.recipeEditForm;
export const getRecipeAddFormState = (state) => state.addRecipeForm;

const getRecipesSearchValue = (state) => state.searchRecipeForm.searchValue;

export const getFilteredRecipes = createSelector(
  [getRecipes, getRecipesSearchValue],
  (recipes, searchValue) => {
    if (!searchValue) {
      return recipes;
    }

    const searchLowerCase = searchValue?.toLowerCase();
    return recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(searchLowerCase) ||
        recipe.content.toLowerCase().includes(searchLowerCase) ||
        recipe.author.toLowerCase().includes(searchLowerCase)
    );
  }
);

const getSearchRecipeFormInputs = (state) => state.searchRecipeForm.inputs;
export const getSearchRecipeFormInput = createSelector(
  getSearchRecipeFormInputs,
  (inputs) => inputs[0]
);
