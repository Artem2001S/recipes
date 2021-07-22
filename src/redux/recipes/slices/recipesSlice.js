import { getFromLocalStorage } from 'redux/localStorage';
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const recipesAdapter = createEntityAdapter();
export const recipesSelectors = recipesAdapter.getSelectors(
  (state) => state.recipes
);

const name = 'recipes';
const initialState =
  getFromLocalStorage(name) || recipesAdapter.getInitialState();

let nextRecipeId = initialState.ids.length + 1;

const recipesSlice = createSlice({
  name,
  initialState,
  reducers: {
    recipeDeleted: (state, { payload }) =>
      recipesAdapter.removeOne(state, payload.id),
    recipeAdded: {
      reducer: recipesAdapter.addOne,
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
      reducer: (state, { payload }) =>
        recipesAdapter.updateOne(state, {
          id: payload.id,
          changes: { ...payload },
        }),
    },
  },
});

export const { recipeDeleted, recipeAdded, recipeEdited } =
  recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
