import { createSlice } from '@reduxjs/toolkit';
import { recipeInputs } from 'shared/recipeInputs';

const initialState = recipeInputs;

const addRecipeFormSlice = createSlice({
  name: 'addRecipeForm',
  initialState,
  reducers: {
    inputValueChanged: (state, { payload }) => {
      const input = state.find((input) => input.id === payload.id);
      input.value = payload.value;

      return state;
    },
  },
});

export const { inputValueChanged } = addRecipeFormSlice.actions;
export const addRecipeFormReducer = addRecipeFormSlice.reducer;
