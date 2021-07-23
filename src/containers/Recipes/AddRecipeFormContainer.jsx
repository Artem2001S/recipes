import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getRecipeObjectFromInputs,
  recipeInputs,
  validateInputs,
} from 'shared/recipeInputs';
import { recipeAdded } from 'redux/recipes/slices/recipesSlice';
import Form from 'components/Form/Form';

const AddRecipeFormContainer = ({ closeSidebar }) => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState([]);
  const [inputs, setInputs] = useState(recipeInputs);

  const handleInputChange = useCallback(
    (id, value) => {
      setInputs(
        inputs.map((input) => (input.id === id ? { ...input, value } : input))
      );
    },
    [inputs]
  );

  const handleInputFormSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const validationErrors = validateInputs(inputs);

      if (validationErrors.length) {
        setErrors(validationErrors);
      } else {
        const recipe = getRecipeObjectFromInputs(inputs);
        dispatch(recipeAdded(recipe));
        closeSidebar();
      }
    },
    [inputs, dispatch, closeSidebar]
  );

  return (
    <Form
      title="Add new recipe"
      submitBtnText="Add"
      errors={errors}
      inputs={inputs}
      onInputChange={handleInputChange}
      onSubmit={handleInputFormSubmit}
    />
  );
};

export default React.memo(AddRecipeFormContainer);
