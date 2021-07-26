import {
  createSlice,
  createEntityAdapter,
  createAction,
} from '@reduxjs/toolkit';

const recipesAdapter = createEntityAdapter();
export const recipesSelectors = recipesAdapter.getSelectors(
  (state) => state.recipes
);

const name = 'recipes';
const initialState = recipesAdapter.getInitialState({
  searchValue: '',
  status: null,
  error: null,
});

const recipesSlice = createSlice({
  name,
  initialState,
  reducers: {
    recipesLoaded: recipesAdapter.upsertMany,
    recipeDeleted: (state, { payload }) =>
      recipesAdapter.removeOne(state, payload.id),
    recipeAdded: recipesAdapter.addOne,
    recipeEdited: (state, { payload }) =>
      recipesAdapter.updateOne(state, {
        id: payload.id,
        changes: { ...payload },
      }),
    searchValueChanged: (state, { payload }) => {
      state.searchValue = payload.value;
    },
    loadingStarted: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    loadingFinished: (state) => {
      state.status = null;
    },
    getError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const fetchRecipes = createAction(`${name}/fetchRecipes`);
export const createRecipe = createAction(`${name}/createRecipe`);
export const deleteRecipe = createAction(`${name}/deleteRecipe`);

export const {
  recipeDeleted,
  recipeAdded,
  recipeEdited,
  searchValueChanged,
  loadingFinished,
  loadingStarted,
  recipesLoaded,
  getError,
} = recipesSlice.actions;

export const recipesReducer = recipesSlice.reducer;
