import React from 'react';
import PropTypes from 'prop-types';
import RecipeCardFooter from './RecipeCardFooter/RecipeCardFooter';
import classes from './RecipeCard.module.scss';

const RecipeCard = ({ id, author, title, content, dateOfCreate }) => {
  return (
    <div className={classes.RecipeCard}>
      <div className={classes.RecipeCardTitle}>{title}</div>
      <div className={classes.RecipeContent}>{content}</div>
      <RecipeCardFooter author={author} dateOfCreate={dateOfCreate} />
    </div>
  );
};

RecipeCard.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  dateOfCreate: PropTypes.string,
};

export default React.memo(RecipeCard);
