import React from 'react';
import PropTypes from 'prop-types';
import classes from './Textarea.module.scss';
import { useInputChangeHandler } from 'hooks/useInputChangeHandler';

const Textarea = ({ id, label, name, value, onChange }) => {
  const inputChangeHandler = useInputChangeHandler(id, onChange);

  return (
    <label htmlFor={id} className={classes.Label}>
      <span className={classes.LabelText}>{label}</span>
      <textarea
        className={classes.Textarea}
        id={id}
        name={name}
        value={value}
        onChange={inputChangeHandler}
      />
    </label>
  );
};

Textarea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default React.memo(Textarea);
