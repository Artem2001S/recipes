import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/UI/Title/Title';
import RecipeCard from './RecipeCard/RecipeCard';
import classes from './RecipesList.module.scss';
import Sidebar from 'components/UI/Sidebar/Sidebar';
import Button from 'components/UI/Button/Button';

const RecipesList = ({
  sidebarVisibility,
  recipes,
  onDelete,
  onOpenSidebar,
  onCloseSidebar,
}) => {
  return (
    <div>
      <Title>Recipes List</Title>
      <Button onClick={onOpenSidebar}>Add new recipe</Button>
      <Sidebar visible={sidebarVisibility} right close={onCloseSidebar}>content</Sidebar>
      <div className={classes.RecipesList}>
        {recipes.length ? (
          recipes.map((recipe, index) => (
            <RecipeCard
              key={recipe.id}
              {...recipe}
              position={index + 1}
              onDelete={onDelete}
            />
          ))
        ) : (
          <Title>Recipes not found</Title>
        )}
      </div>
    </div>
  );
};

RecipesList.propTypes = {
  recipes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default React.memo(RecipesList);
