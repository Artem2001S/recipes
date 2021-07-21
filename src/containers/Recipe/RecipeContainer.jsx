import React from 'react';
import RecipeViewContainer from './RecipeViewContainer';

const RecipeContainer = ({ recipeId }) => {
  return (
    <div>
      <RecipeViewContainer recipeId={recipeId} />
    </div>
  );
};

export default React.memo(RecipeContainer);
