import React from 'react';
import classes from './Title.module.scss';

const Title = ({ children }) => {
  return <div className={classes.Title}>{children}</div>;
};

export default React.memo(Title);
