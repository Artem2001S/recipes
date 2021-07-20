import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recipeDeleted } from 'redux/recipes/recipesSlice';
import RecipesList from 'components/RecipesList/RecipesList';

const RecipesListContainer = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  const handleDelete = useCallback(
    (id) => dispatch(recipeDeleted({ id })),
    [dispatch]
  );

  return <RecipesList recipes={recipes} onDelete={handleDelete} />;
};

export default React.memo(RecipesListContainer);
