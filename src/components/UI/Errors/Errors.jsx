import React from 'react';
import PropTypes from 'prop-types';
import classes from './Errors.module.scss';

const Error = ({ errors }) => (
  <div className={classes.Error}>
    {errors.map((errorMessage, index) => (
      <div key={index} className={classes.ErrorMessage}>
        {errorMessage}
      </div>
    ))}
  </div>
);

Error.propTypes = { errors: PropTypes.arrayOf(PropTypes.string) };

export default React.memo(Error);
