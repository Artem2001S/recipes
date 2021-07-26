import { call, put } from 'redux-saga/effects';
import {
  getError,
  loadingFinished,
  loadingStarted,
  recipeAdded,
  recipesLoaded,
} from '../slices/recipesSlice';
import { createRecipeRequest, fetchRecipesRequest } from './requests';

export function* fetchRecipesWorker() {
  try {
    yield put(loadingStarted());
    const response = yield call(fetchRecipesRequest);

    if (!response.ok) {
      throw new Error('Loading recipes error');
    }
    const data = yield response.json();

    yield put(recipesLoaded(data));
  } catch (error) {
    yield put(getError());
  } finally {
    yield put(loadingFinished());
  }
}

export function* createRecipeWorker(action) {
  try {
    yield put(loadingStarted());
    const { payload } = action;
    const response = yield call(createRecipeRequest, {
      ...payload,
      dateOfCreate: new Date().toLocaleDateString(),
    });

    if (!response.ok) {
      throw new Error('Recipe creating error.');
    }

    const createdRecipe = yield response.json();
    yield put(recipeAdded(createdRecipe));
  } catch (error) {
    yield put(getError());
  } finally {
    yield put(loadingFinished());
  }
}
