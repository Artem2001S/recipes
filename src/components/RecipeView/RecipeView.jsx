import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/UI/Title/Title';
import Container from 'components/UI/Container/Container';
import classes from './RecipeView.module.scss';
import Button from 'components/UI/Button/Button';

const RecipeView = ({ recipe }) => {
  return (
    <Container>
      <div className={classes.RecipeInfo}>
        {`Created by ${recipe.author}, ${recipe.dateOfCreate}`}
        {recipe.dateOfLastEdit && `edited ${recipe.dateOfLastEdit}`}
      </div>
      <Title>{recipe.title}</Title>
      <div className={classes.RecipeContent}>{recipe.content}</div>
      <div className={classes.EditBtn}>
        <Button>Edit</Button>
      </div>
    </Container>
  );
};

RecipeView.propTypes = {
  recipe: PropTypes.object,
};

export default React.memo(RecipeView);
