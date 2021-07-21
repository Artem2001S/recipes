import { nanoid, createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputs: [
    {
      id: nanoid(),
      label: 'Search',
      name: 'search',
      value: '',
      type: 'text',
    },
  ],
  searchValue: '',
};

const searchRecipeFormSlice = createSlice({
  name: 'searchRecipeForm',
  initialState,
  reducers: {
    inputValueChanged: (state, { payload }) => {
      state.inputs[0].value = payload.value;
    },
    searchValueChanged: (state, { payload }) => {
      state.searchValue = payload.value;
    },
  },
});

export const searchRecipeFormReducer = searchRecipeFormSlice.reducer;
export const { inputValueChanged, searchValueChanged } =
  searchRecipeFormSlice.actions;
