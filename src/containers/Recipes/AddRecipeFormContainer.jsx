import Form from 'components/Form/Form';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputValueChanged } from 'redux/recipes/addRecipeFormSlice';

const AddRecipeFormContainer = () => {
  const dispatch = useDispatch();

  const inputs = useSelector((state) => state.addRecipeForm);

  const handleInputChange = useCallback(
    (id, value) => dispatch(inputValueChanged({ id, value })),
    [dispatch]
  );

  return <Form inputs={inputs} onInputChange={handleInputChange} />;
};

export default React.memo(AddRecipeFormContainer);
