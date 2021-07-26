import React, { useCallback, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getLoadingStatusSelector } from 'redux/recipes/selectors/selectors';
import RecipesListContainer from './RecipesListContainer';
import Container from 'components/UI/Container/Container';
import Button from 'components/UI/Button/Button';
import Sidebar from 'components/UI/Sidebar/Sidebar';
import AddRecipeFormContainer from './AddRecipeFormContainer';
import Loader from 'components/UI/Loader/Loader';

const Recipes = () => {
  const loadingStatus = useSelector(getLoadingStatusSelector);
  const isLoading = useMemo(() => loadingStatus === 'loading', [loadingStatus]);

  const [sidebarVisibility, setSidebarVisibility] = useState(false);

  const openSidebarBtnClickHandler = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  const closeSidebar = useCallback(() => setSidebarVisibility(false), []);

  return (
    <Container>
      {isLoading && <Loader />}
      <Button onClick={openSidebarBtnClickHandler}>Add new recipe</Button>
      <Sidebar visible={sidebarVisibility} close={closeSidebar}>
        <AddRecipeFormContainer closeSidebar={closeSidebar} />
      </Sidebar>
      <RecipesListContainer />
    </Container>
  );
};

export default React.memo(Recipes);
