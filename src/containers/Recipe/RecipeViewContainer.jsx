import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import RecipeView from 'components/RecipeView/RecipeView';
import { getRecipesSelector } from 'redux/recipes/selectors';

const RecipeViewContainer = ({ recipeId }) => {
  const recipes = useSelector(getRecipesSelector);
  const recipe = useMemo(
    () => recipes.find((recipe) => recipe.id === recipeId),
    [recipeId, recipes]
  );

  console.log();

  return <RecipeView recipe={recipe} />;
};

export default React.memo(RecipeViewContainer);
