import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getValidationErrors,
  inputValueChanged,
  resetState,
} from 'redux/recipes/slices/addRecipeFormSlice';
import { getRecipeObjectFromInputs, validateInputs } from 'shared/recipeInputs';
import { recipeAdded } from 'redux/recipes/slices/recipesSlice';
import Form from 'components/Form/Form';
import { getRecipeAddFormState } from 'redux/recipes/selectors/selectors';

const AddRecipeFormContainer = ({ closeSidebar }) => {
  const dispatch = useDispatch();

  const { inputs, errors } = useSelector(getRecipeAddFormState);

  const handleInputChange = useCallback(
    (id, value) => dispatch(inputValueChanged({ id, value })),
    [dispatch]
  );

  const handleInputFormSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const validationErrors = validateInputs(inputs);

      if (validationErrors.length) {
        dispatch(getValidationErrors({ errors: validationErrors }));
      } else {
        const recipe = getRecipeObjectFromInputs(inputs);
        dispatch(recipeAdded(recipe));
        dispatch(resetState());
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
