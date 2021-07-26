import React, { useCallback, useState } from 'react';
import { getIsLoadingSelector } from 'redux/recipes/selectors/selectors';
import { useSelector } from 'react-redux';
import RecipesListContainer from './RecipesListContainer';
import Container from 'components/UI/Container/Container';
import Button from 'components/UI/Button/Button';
import Sidebar from 'components/UI/Sidebar/Sidebar';
import AddRecipeFormContainer from './AddRecipeFormContainer';
import Loader from 'components/UI/Loader/Loader';

const Recipes = () => {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);

  const openSidebarBtnClickHandler = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  const closeSidebar = useCallback(() => setSidebarVisibility(false), []);

  const isLoading = useSelector(getIsLoadingSelector);

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
