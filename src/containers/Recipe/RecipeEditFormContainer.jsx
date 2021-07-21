import React, { useCallback, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fillRecipeInputs,
  getRecipeObjectFromInputs,
  validateInputs,
} from 'shared/recipeInputs';
import {
  getValidationErrors,
  inputValueChanged,
  recipeEditFormInputsInitialized,
} from 'redux/recipes/recipeEditForm';
import { recipeEdited } from 'redux/recipes/recipesSlice';
import Form from 'components/Form/Form';

const RecipeEditFormContainer = ({ recipe, closeSidebar }) => {
  const dispatch = useDispatch();
  const { inputs, errors } = useSelector((state) => state.recipeEditForm);

  const filledInputs = useMemo(() => fillRecipeInputs(recipe), [recipe]);

  useEffect(() => {
    dispatch(recipeEditFormInputsInitialized({ inputs: filledInputs }));
  }, [dispatch, filledInputs]);

  const formSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();

      const validationErrors = validateInputs(inputs);

      if (validationErrors.length) {
        dispatch(getValidationErrors({ errors: validationErrors }));
      } else {
        const recipeObject = getRecipeObjectFromInputs(inputs);
        dispatch(
          recipeEdited({
            id: recipe.id,
            ...recipeObject,
            dateOfLastEdit: new Date().toLocaleDateString(),
          })
        );
        dispatch(getValidationErrors({ errors: [] }));
        closeSidebar();
      }
    },
    [inputs, dispatch, recipe.id, closeSidebar]
  );

  const inputChangeHandler = useCallback(
    (id, value) => dispatch(inputValueChanged({ id, value })),
    [dispatch]
  );

  return (
    <Form
      title="Edit recipe"
      submitBtnText="Save"
      inputs={inputs}
      errors={errors}
      onSubmit={formSubmitHandler}
      onInputChange={inputChangeHandler}
    />
  );
};

export default React.memo(RecipeEditFormContainer);
