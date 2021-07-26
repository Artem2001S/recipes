import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import {
  createRecipeRequest,
  deleteRecipeRequest,
  fetchRecipesRequest,
} from '../requests';

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

export const deleteRecipe = createAsyncThunk(
  `${name}/deleteRecipe`,
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const { id } = payload;
      console.log('id', id);
      const response = await deleteRecipeRequest(payload.id);

      if (!response.ok) {
        throw new Error('Recipe deleting server error.');
      }

      dispatch(recipeRemoved({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createRecipe = createAsyncThunk(
  `${name}/createRecipe`,
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const { author, title, content } = payload;
      const response = await createRecipeRequest({
        author,
        title,
        content,
        dateOfCreate: new Date().toLocaleDateString(),
        dateOfLastEdit: null,
      });

      if (!response.ok) {
        throw new Error('Recipe creating error');
      }
      const data = await response.json();
      dispatch(recipeAdded(data));
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
    recipeRemoved: (state, { payload }) =>
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
  },
  extraReducers: {
    [fetchRecipes.pending]: startLoading,
    [deleteRecipe.pending]: startLoading,
    [createRecipe.pending]: startLoading,

    [fetchRecipes.fulfilled]: (state, { payload }) => {
      finishLoading(state);
      recipesAdapter.upsertMany(state, payload);
    },
    [deleteRecipe.fulfilled]: finishLoading,
    [createRecipe.fulfilled]: finishLoading,

    [fetchRecipes.rejected]: setError,
    [deleteRecipe.rejected]: setError,
    [createRecipe.rejected]: setError,
  },
});

export const { recipeRemoved, recipeAdded, recipeEdited, searchValueChanged } =
  recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
