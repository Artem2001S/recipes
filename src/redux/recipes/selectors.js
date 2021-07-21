import { createSelector } from 'reselect';

const getRecipes = (state) => state.recipes;
const getRecipesSearchValue = (state) => state.searchRecipeForm.searchValue;

export const getRecipesSelector = createSelector(
  [getRecipes],
  (recipes) => recipes
);

export const getFilteredRecipes = createSelector(
  [getRecipesSelector, getRecipesSearchValue],
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
