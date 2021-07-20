import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Button.module.scss';

const Button = ({ children, dangerous, type = 'button', onClick }) => {
  const btnClasses = classNames(
    { [classes.Dangerous]: dangerous },
    classes.Button
  );

  return (
    <button className={btnClasses} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  dangerous: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default React.memo(Button);
