import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/UI/Title/Title';
import RecipeCard from './RecipeCard/RecipeCard';
import classes from './RecipesList.module.scss';

const RecipesList = ({ recipes }) => {
  return (
    <div>
      <Title>Recipes List</Title>
      <div className={classes.RecipesList}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};

RecipesList.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default React.memo(RecipesList);
