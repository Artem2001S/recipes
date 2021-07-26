import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { fetchRecipes, recipeDeleted } from 'redux/recipes/slices/recipesSlice';
import { getFilteredRecipes } from 'redux/recipes/selectors/selectors';
import { useQuery } from 'hooks/useQuery';
import { searchValueChanged } from 'redux/recipes/slices/recipesSlice';
import { useHistory } from 'react-router-dom';
import RecipesList from 'components/RecipesList/RecipesList';

const RecipesListContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();
  const recipes = useSelector(getFilteredRecipes);

  const urlValue = query.get('search');

  const [searchInput, setSearchInput] = useState({
    id: nanoid(),
    label: 'Search',
    name: 'search',
    value: '',
    type: 'text',
  });

  useEffect(() => {
    // initialize input value
    changeInputValue(urlValue || '');

    dispatch(fetchRecipes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeInputValue = useCallback(
    (value) => {
      setSearchInput({ ...searchInput, value });
    },
    [searchInput]
  );

  const changeInputValueHandler = useCallback(
    (e) => {
      changeInputValue(e.target.value);
    },
    [changeInputValue]
  );

  useEffect(() => {
    dispatch(searchValueChanged({ value: urlValue || '' }));
  }, [dispatch, urlValue]);

  const handleRecipeDelete = useCallback(
    (id) => dispatch(recipeDeleted({ id })),
    [dispatch]
  );

  const searchBtnClickHandler = useCallback(() => {
    // change url, then dispatch(search value changed) using useEffect

    searchInput.value
      ? history.push(`?search=${searchInput.value}`)
      : history.push();
  }, [history, searchInput]);

  return (
    <RecipesList
      recipes={recipes}
      searchInput={searchInput}
      onDelete={handleRecipeDelete}
      onSearchInputChange={changeInputValueHandler}
      onSearchBtnClick={searchBtnClickHandler}
    />
  );
};

export default React.memo(RecipesListContainer);
