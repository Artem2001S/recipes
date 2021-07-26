import React, { useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getErrorsSelector,
  getLoadingStatusSelector,
  getRecipesEntities,
} from 'redux/recipes/selectors/selectors';
import Container from 'components/UI/Container/Container';
import Sidebar from 'components/UI/Sidebar/Sidebar';
import Button from 'components/UI/Button/Button';
import RecipeEditFormContainer from './RecipeEditFormContainer';
import RecipeView from 'components/RecipeView/RecipeView';
import Title from 'components/UI/Title/Title';
import { useEffect } from 'react';
import { fetchRecipes } from 'redux/recipes/slices/recipesSlice';
import Loader from 'components/UI/Loader/Loader';
import Errors from 'components/UI/Errors/Errors';

const RecipeContainer = ({ recipeId }) => {
  const loadingStatus = useSelector(getLoadingStatusSelector);
  const isLoading = useMemo(() => loadingStatus === 'loading', [loadingStatus]);
  const error = useSelector(getErrorsSelector);

  const dispatch = useDispatch();
  const recipesEntities = useSelector(getRecipesEntities);

  const recipe = useMemo(
    () => recipesEntities[recipeId],
    [recipeId, recipesEntities]
  );

  const [isEditing, setIsEditing] = useState(false);

  const closeSidebar = useCallback(() => setIsEditing(false), []);
  const showSidebar = useCallback(() => setIsEditing(true), []);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <Container>
      {error && <Errors errors={[error]} />}

      {isLoading ? (
        <Loader />
      ) : recipe ? (
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
