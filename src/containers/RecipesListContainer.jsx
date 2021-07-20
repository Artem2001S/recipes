import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recipeDeleted } from 'redux/recipes/recipesSlice';
import RecipesList from 'components/RecipesList/RecipesList';
import { useState } from 'react';

const RecipesListContainer = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  const handleDelete = useCallback(
    (id) => dispatch(recipeDeleted({ id })),
    [dispatch]
  );

  const [sidebarVisibility, setSidebarVisibility] = useState(false);

  const openSidebar = useCallback(() => {
    setSidebarVisibility(true);
  }, []);
  const closeSidebar = useCallback(() => setSidebarVisibility(false), []);

  return (
    <RecipesList
      recipes={recipes}
      sidebarVisibility={sidebarVisibility}
      onDelete={handleDelete}
      onOpenSidebar={openSidebar}
      onCloseSidebar={closeSidebar}
    />
  );
};

export default React.memo(RecipesListContainer);
