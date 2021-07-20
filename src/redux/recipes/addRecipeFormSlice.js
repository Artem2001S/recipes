import { createSlice } from '@reduxjs/toolkit';
import { recipeInputs } from 'shared/recipeInputs';

const initialState = recipeInputs;

const addRecipeFormSlice = createSlice({
  name: 'addRecipeForm',
  initialState,
  reducers: {},
});

export const {} = addRecipeFormSlice.actions;
export const addRecipeFormReducer = addRecipeFormSlice.reducer;
