import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/UI/Title/Title';
import RecipeCard from './RecipeCard/RecipeCard';
import classes from './RecipesList.module.scss';

const RecipesList = ({ recipes, onDelete }) => {
  return (
    <div>
      <Title>Recipes List</Title>
      <div className={classes.RecipesList}>
        {recipes.length ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} onDelete={onDelete} />
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
