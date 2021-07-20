import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/UI/Input/Input';
import classes from './Form.module.scss';

const Form = ({ inputs, onInputChange, onSubmit }) => {
  return (
    <form className={classes.Form}>
      {inputs.map(({ validationData, ...input }) =>
        input.type === 'text' ? (
          <Input key={input.id} {...input} onChange={onInputChange} />
        ) : (
          'textarea'
        )
      )}
    </form>
  );
};

Form.propTypes = {
  inputs: PropTypes.array,
  onInputChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default React.memo(Form);
