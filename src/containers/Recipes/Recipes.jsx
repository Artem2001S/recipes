import React, { useCallback, useState } from 'react';
import RecipesListContainer from './RecipesListContainer';
import Container from 'components/UI/Container/Container';
import Button from 'components/UI/Button/Button';
import Sidebar from 'components/UI/Sidebar/Sidebar';
import AddRecipeFormContainer from './AddRecipeFormContainer';
import SearchRecipeFormContainer from './SearchRecipeFormContainer';

const Recipes = () => {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);

  const openSidebarBtnClickHandler = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  const closeSidebar = useCallback(() => setSidebarVisibility(false), []);

  return (
    <Container>
      <Button onClick={openSidebarBtnClickHandler}>Add new recipe</Button>
      <SearchRecipeFormContainer />
      <Sidebar visible={sidebarVisibility} close={closeSidebar}>
        <AddRecipeFormContainer closeSidebar={closeSidebar} />
      </Sidebar>
      <RecipesListContainer />
    </Container>
  );
};

export default React.memo(Recipes);
