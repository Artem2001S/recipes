import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/UI/Input/Input';
import Textarea from 'components/UI/Textarea/Textarea';
import Button from 'components/UI/Button/Button';
import Errors from '../UI/Errors/Errors';
import Title from 'components/UI/Title/Title';
import classes from './Form.module.scss';

const Form = ({
  title,
  inputs,
  onInputChange,
  errors,
  submitBtnText = 'Submit',
  onSubmit,
}) => {
  return (
    <form className={classes.Form} onSubmit={onSubmit}>
      {title && <Title medium>{title}</Title>}
      {errors?.length > 0 && <Errors errors={errors} />}
      {inputs.map(({ validationData, ...input }) =>
        input.type === 'text' ? (
          <Input key={input.id} {...input} onChange={onInputChange} />
        ) : (
          <Textarea key={input.id} {...input} onChange={onInputChange} />
        )
      )}
      <Button type="submit">{submitBtnText}</Button>
    </form>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  submitBtnText: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string),
  inputs: PropTypes.array,
  onInputChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default React.memo(Form);
