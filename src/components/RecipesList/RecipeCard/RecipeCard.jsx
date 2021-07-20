import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import RecipeCardFooter from './RecipeCardFooter/RecipeCardFooter';
import Button from 'components/UI/Button/Button';
import classes from './RecipeCard.module.scss';
import { Link } from 'react-router-dom';

const RecipeCard = ({
  id,
  author,
  title,
  content,
  dateOfCreate,
  position,
  onDelete,
}) => {
  const deleteBtnClickHandler = useCallback(() => onDelete(id), [id, onDelete]);

  return (
    <div className={classes.RecipeCard}>
      <div className={classes.RecipeCardTitle}>{title}</div>
      <div className={classes.RecipeContent}>{content}</div>
      <div className={classes.RecipeActions}>
        <Link className={classes.RecipeOpenLink} to={`/recipes/${position}`}>
          Open
        </Link>
        <Button dangerous onClick={deleteBtnClickHandler}>
          Delete
        </Button>
      </div>

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
  position: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default React.memo(RecipeCard);
