import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import * as inputsUtils from 'shared/recipeInputs';
import { recipeEdited } from 'redux/recipes/slices/recipesSlice';
import Form from 'components/Form/Form';
import { useState } from 'react';

const RecipeEditFormContainer = ({ recipe, closeSidebar }) => {
  const dispatch = useDispatch();

  const filledInputs = useMemo(
    () => inputsUtils.fillRecipeInputs(recipe),
    [recipe]
  );

  const [inputs, setInputs] = useState(filledInputs);
  const [errors, setErrors] = useState([]);

  const formSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();

      const validationErrors = inputsUtils.validateInputs(inputs);

      if (validationErrors.length) {
        setErrors(validationErrors);
      } else {
        const recipeObject = inputsUtils.getRecipeObjectFromInputs(inputs);
        dispatch(
          recipeEdited({
            id: recipe.id,
            ...recipeObject,
            dateOfLastEdit: new Date().toLocaleDateString(),
          })
        );
        closeSidebar();
      }
    },
    [inputs, dispatch, recipe, closeSidebar]
  );

  const inputChangeHandler = useCallback(
    (id, value) =>
      setInputs(
        inputs.map((input) => (input.id === id ? { ...input, value } : input))
      ),
    [inputs]
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
