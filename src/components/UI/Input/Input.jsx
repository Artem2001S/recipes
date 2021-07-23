import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.scss';
import { useInputChangeHandler } from 'hooks/useInputChangeHandler';

const Input = ({ id, label, name, value, onChange, needToSendId = true }) => {
  let inputChangeHandler = useInputChangeHandler(id, onChange);
  if (!needToSendId) {
    inputChangeHandler = onChange;
  }

  return (
    <label htmlFor={id} className={classes.Label}>
      <span className={classes.LabelText}>{label}</span>
      <input
        className={classes.Input}
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={inputChangeHandler}
      />
    </label>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default React.memo(Input);
