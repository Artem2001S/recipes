import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from 'hooks/useQuery';
import {
  inputValueChanged,
  searchValueChanged,
} from 'redux/recipes/slices/searchRecipeForm';
import Form from 'components/Form/Form';

const SearchRecipeForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();

  const [searchInput] = useSelector((state) => state.searchRecipeForm.inputs);
  const urlValue = query.get('search');

  useEffect(() => {
    dispatch(searchValueChanged({ value: urlValue || '' }));
  }, [dispatch, urlValue]);

  const inputChangeHandler = useCallback(
    (id, value) => {
      dispatch(inputValueChanged({ id, value }));
    },
    [dispatch]
  );

  const formSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();

      // change url, then dispatch (search value changed) using useEffect
      searchInput.value
        ? history.push(`?search=${searchInput.value}`)
        : history.push('');
    },
    [history, searchInput]
  );

  return (
    <Form
      title="Search recipe"
      submitBtnText="Search"
      inputs={[searchInput]}
      onSubmit={formSubmitHandler}
      onInputChange={inputChangeHandler}
    />
  );
};

export default React.memo(SearchRecipeForm);
