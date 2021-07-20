import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Button.module.scss';

const Button = ({ children, dangerous, onClick }) => {
  const btnClasses = classNames(
    { [classes.Dangerous]: dangerous },
    classes.Button
  );
  return (
    <button className={btnClasses} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
