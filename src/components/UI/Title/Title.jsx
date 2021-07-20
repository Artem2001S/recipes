import React from 'react';
import classes from './Title.module.scss';
import classNames from 'classnames';

const Title = ({ children, large, medium, small }) => {
  const titleClasses = classNames(
    {
      [classes.Large]: large,
      [classes.Medium]: medium,
      [classes.Small]: small,
    },
    classes.Title
  );

  return <div className={titleClasses}>{children}</div>;
};
export default React.memo(Title);
