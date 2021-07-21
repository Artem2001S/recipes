import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeContainer from 'containers/Recipe/RecipeContainer';

const RecipePage = () => {
  const { id } = useParams();

  return <RecipeContainer recipeId={id} />;
};

export default React.memo(RecipePage);
