import { createSlice } from '@reduxjs/toolkit';
import { recipeInputs } from 'shared/recipeInputs';

const initialState = { inputs: recipeInputs, errors: [] };

const addRecipeFormSlice = createSlice({
  name: 'addRecipeForm',
  initialState,
  reducers: {
    inputValueChanged: (state, { payload }) => {
      const input = state.inputs.find((input) => input.id === payload.id);
      input.value = payload.value;
    },

    getValidationErrors: (state, { payload }) => {
      state.errors = payload.errors;
    },

    resetState: () => initialState,
  },
});

export const { inputValueChanged, getValidationErrors, resetState } =
  addRecipeFormSlice.actions;
export const addRecipeFormReducer = addRecipeFormSlice.reducer;
