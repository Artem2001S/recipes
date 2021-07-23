import { getFromLocalStorage } from 'redux/localStorage';
import { createSlice, createEntityAdapter, nanoid } from '@reduxjs/toolkit';

const recipesAdapter = createEntityAdapter();
export const recipesSelectors = recipesAdapter.getSelectors(
  (state) => state.recipes
);

const name = 'recipes';
const initialState =
  getFromLocalStorage(name) ||
  recipesAdapter.getInitialState({ searchValue: '' });

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
          id: nanoid(),
          dateOfCreate: new Date().toLocaleDateString(),
          dateOfLastEdit: null,
        },
      }),
    },
    recipeEdited: (state, { payload }) =>
      recipesAdapter.updateOne(state, {
        id: payload.id,
        changes: { ...payload },
      }),
    searchValueChanged: (state, { payload }) => {
      state.searchValue = payload.value;
    },
  },
});

export const { recipeDeleted, recipeAdded, recipeEdited, searchValueChanged } =
  recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
