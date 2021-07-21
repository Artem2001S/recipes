import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/UI/Title/Title';
import classes from './RecipeView.module.scss';

const RecipeView = ({ recipe }) => {
  return (
    <>
      <div className={classes.RecipeInfo}>
        {`Created by ${recipe.author}, ${recipe.dateOfCreate}`}
        {recipe.dateOfLastEdit && ` (edited ${recipe.dateOfLastEdit})`}
      </div>
      <Title>{recipe.title}</Title>
      <div className={classes.RecipeContent}>{recipe.content}</div>
    </>
  );
};

RecipeView.propTypes = {
  recipe: PropTypes.object,
};

export default React.memo(RecipeView);
