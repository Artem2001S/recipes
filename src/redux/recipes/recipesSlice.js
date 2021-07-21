const { createSlice } = require('@reduxjs/toolkit');

const initialState = [
  {
    id: '1',
    author: 'Alex Alex',
    dateOfCreate: '2019-11-20',
    dateOfLastEdit: null,
    title: 'Recipe 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '2',
    author: 'Ann Ann',
    dateOfCreate: '2019-11-20',
    dateOfLastEdit: null,
    title: 'Recipe 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '3',
    author: 'John',
    dateOfCreate: '2019-11-20',
    dateOfLastEdit: null,
    title: 'Recipe 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '4',
    author: 'Charlie',
    dateOfCreate: '2019-11-20',
    dateOfLastEdit: null,
    title: 'Recipe 4',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '5',
    author: 'Nikolay',
    dateOfCreate: '2019-11-20',
    dateOfLastEdit: null,
    title: 'Recipe 5',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '6',
    author: 'Kate',
    dateOfCreate: '2019-11-20',
    dateOfLastEdit: null,
    title: 'Recipe 6',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

let nextRecipeId = initialState.length + 1;

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    recipeDeleted: (state, { payload }) => {
      return state.filter((recipe) => recipe.id !== payload.id);
    },
    recipeAdded: {
      reducer: (state, { payload }) => {
        state.unshift(payload);
      },
      prepare: (payload) => ({
        payload: {
          ...payload,
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
