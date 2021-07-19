import React from 'react';
import RecipesList from 'components/RecipesList/RecipesList';
import { useSelector } from 'react-redux';

const RecipesListContainer = () => {
  const recipes = useSelector((state) => state.recipes);

  return <RecipesList recipes={recipes} />;
};

export default React.memo(RecipesListContainer);
