import React from 'react';
import PropTypes from 'prop-types';
import userIcon from './icons/user.svg';
import calendarIcon from './icons/calendar.svg';
import classes from './RecipeCardFooter.module.scss';

const RecipeCardFooter = ({ author, dateOfCreate }) => {
  return (
    <div className={classes.RecipeFooter}>
      <div className={classes.RecipeAuthor}>
        <img
          className={classes.RecipeFooterIcon}
          src={userIcon}
          alt="Author icon"
        />
        <span className={classes.RecipeFooterText}>{author}</span>
      </div>
      <div className={classes.RecipeDateOfCreate}>
        <img
          className={classes.RecipeFooterIcon}
          src={calendarIcon}
          alt="Calendar icon"
        />
        <span className={classes.RecipeFooterText}>{dateOfCreate}</span>
      </div>
    </div>
  );
};

RecipeCardFooter.propTypes = {
  author: PropTypes.string,
  daeOfCreate: PropTypes.string,
};

export default React.memo(RecipeCardFooter);
