import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/UI/Title/Title';
import RecipeCard from './RecipeCard/RecipeCard';
import classes from './RecipesList.module.scss';
import Input from 'components/UI/Input/Input';
import Button from 'components/UI/Button/Button';

const RecipesList = ({
  recipes,
  searchInput,
  onDelete,
  onSearchInputChange,
  onSearchBtnClick,
}) => {
  return (
    <>
      <Title large>Recipes List</Title>
      <div className={classes.SearchBlock}>
        <Input
          {...searchInput}
          onChange={onSearchInputChange}
          needToSendId={false}
        />
        <Button onClick={onSearchBtnClick}>Search</Button>
      </div>

      <div className={classes.RecipesList}>
        {recipes?.length ? (
          recipes.map((recipe, index) => (
            <RecipeCard key={recipe.id} {...recipe} onDelete={onDelete} />
          ))
        ) : (
          <Title>Recipes not found</Title>
        )}
      </div>
    </>
  );
};

RecipesList.propTypes = {
  recipes: PropTypes.array.isRequired,
  searchInput: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  onSearchBtnClick: PropTypes.func.isRequired,
};

export default React.memo(RecipesList);
