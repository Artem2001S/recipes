const { createSlice } = require('@reduxjs/toolkit');

const initialState = {};

const recipePageSlice = createSlice({
  name: 'recipePage',
  initialState,
  reducers: {
    recipePageInitialized: (state, { payload }) => {
      state = payload;
    },
  },
});

export const recipePageReducer = recipePageSlice.reducer;
export const { recipePageInitialized } = recipePageSlice.actions;
