import {
  createSlice,
  createEntityAdapter,
  nanoid,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { fetchRecipesRequest } from '../requests';

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

export const fetchRecipes = createAsyncThunk(
  `${name}/fetchRecipes`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchRecipesRequest();
      if (!response.ok) {
        throw new Error('Loading recipes error...');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const startLoading = (state) => {
  state.status = 'loading';
  state.error = null;
};

const finishLoading = (state) => {
  state.status = null;
  state.error = null;
};

const setError = (state, { payload }) => {
  state.error = payload;
  state.status = null;
};

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
  extraReducers: {
    [fetchRecipes.fulfilled]: (state, { payload }) => {
      finishLoading(state);
      recipesAdapter.upsertMany(state, payload);
    },
    [fetchRecipes.pending]: startLoading,
    [fetchRecipes.rejected]: setError,
  },
});

export const { recipeDeleted, recipeAdded, recipeEdited, searchValueChanged } =
  recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
