import React, { useState, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getRecipesEntities } from 'redux/recipes/selectors/selectors';
import Container from 'components/UI/Container/Container';
import Sidebar from 'components/UI/Sidebar/Sidebar';
import Button from 'components/UI/Button/Button';
import RecipeEditFormContainer from './RecipeEditFormContainer';
import RecipeView from 'components/RecipeView/RecipeView';
import Title from 'components/UI/Title/Title';

const RecipeContainer = ({ recipeId }) => {
  const recipesEntities = useSelector(getRecipesEntities);
  const recipe = useMemo(() => recipesEntities[recipeId], [recipeId, recipesEntities]);

  const [isEditing, setIsEditing] = useState(false);

  const closeSidebar = useCallback(() => setIsEditing(false), []);
  const showSidebar = useCallback(() => setIsEditing(true), []);

  return (
    <Container>
      {recipe ? (
        <>
          <RecipeView recipe={recipe} />
          <Button onClick={showSidebar}>Edit</Button>
          <Sidebar visible={isEditing} close={closeSidebar} right>
            <RecipeEditFormContainer
              recipe={recipe}
              closeSidebar={closeSidebar}
            />
          </Sidebar>
        </>
      ) : (
        <Title>Recipe not found</Title>
      )}
    </Container>
  );
};

export default React.memo(RecipeContainer);
