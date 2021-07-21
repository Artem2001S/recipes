import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'components/Form/Form';
import {
  inputValueChanged,
  searchValueChanged,
} from 'redux/recipes/searchRecipeForm';

const SearchRecipeForm = () => {
  const dispatch = useDispatch();
  const { inputs } = useSelector((state) => state.searchRecipeForm);

  const inputChangeHandler = useCallback(
    (id, value) => {
      dispatch(inputValueChanged({ id, value }));
    },
    [dispatch]
  );

  const formSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(searchValueChanged({ value: inputs[0]?.value }));
    },
    [dispatch, inputs]
  );

  return (
    <Form
      title="Search recipe"
      submitBtnText="Search"
      onSubmit={formSubmitHandler}
      inputs={inputs}
      onInputChange={inputChangeHandler}
    />
  );
};

export default React.memo(SearchRecipeForm);
