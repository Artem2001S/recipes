import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getErrorSelector,
  getIsLoadingSelector,
  getRecipesEntities,
} from 'redux/recipes/selectors/selectors';
import { fetchRecipes } from 'redux/recipes/slices/recipesSlice';
import Container from 'components/UI/Container/Container';
import Sidebar from 'components/UI/Sidebar/Sidebar';
import Button from 'components/UI/Button/Button';
import RecipeEditFormContainer from './RecipeEditFormContainer';
import RecipeView from 'components/RecipeView/RecipeView';
import Title from 'components/UI/Title/Title';
import Loader from 'components/UI/Loader/Loader';
import Errors from 'components/UI/Errors/Errors';

const RecipeContainer = ({ recipeId }) => {
  const dispatch = useDispatch();
  const recipesEntities = useSelector(getRecipesEntities);
  const recipe = useMemo(
    () => recipesEntities[recipeId],
    [recipeId, recipesEntities]
  );

  const isLoading = useSelector(getIsLoadingSelector);
  const error = useSelector(getErrorSelector);

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => dispatch(fetchRecipes()), [dispatch]);

  const closeSidebar = useCallback(() => setIsEditing(false), []);
  const showSidebar = useCallback(() => setIsEditing(true), []);

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      {error && <Errors errors={[error]} />}
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
