const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  inputs: [],
  errors: [],
};

const recipeEditFormSlice = createSlice({
  name: 'recipeEditForm',
  initialState,
  reducers: {
    recipeEditFormInputsInitialized: (state, { payload }) => {
      state.inputs = payload.inputs;
    },
    getValidationErrors: (state, { payload }) => {
      state.errors = payload.errors;
    },
    inputValueChanged: (state, { payload }) => {
      const input = state.inputs.find((input) => input.id === payload.id);
      input.value = payload.value;
    },
  },
});

export const recipeEditFormReducer = recipeEditFormSlice.reducer;
export const {
  recipeEditFormInputsInitialized,
  getValidationErrors,
  inputValueChanged,
} = recipeEditFormSlice.actions;
