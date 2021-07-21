import { getFromLocalStorage } from 'redux/localStorage';

const { createSlice } = require('@reduxjs/toolkit');

const name = 'recipes';
const initialState = getFromLocalStorage(name) || [];

let nextRecipeId = initialState.length + 1;

const recipesSlice = createSlice({
  name,
  initialState,
  reducers: {
    recipeDeleted: (state, { payload }) => {
      return state.filter((recipe) => recipe.id !== payload.id);
    },
    recipeAdded: {
      reducer: (state, { payload }) => {
        console.log('payload reducer', payload);
        state.unshift(payload);
      },

      prepare: ({ author, title, content }) => ({
        payload: {
          author,
          title,
          content,
          id: nextRecipeId++ + '',
          dateOfCreate: new Date().toLocaleDateString(),
          dateOfLastEdit: null,
        },
      }),
    },
    recipeEdited: {
      reducer: (state, { payload }) => {
        return state.map((recipe) =>
          recipe.id === payload.id ? { ...recipe, ...payload } : recipe
        );
      },
    },
  },
});

export const { recipeDeleted, recipeAdded, recipeEdited } =
  recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
