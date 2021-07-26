import { call, put } from 'redux-saga/effects';
import {
  getError,
  loadingFinished,
  loadingStarted,
  recipeAdded,
  recipeDeleted,
  recipeEdited,
  recipesLoaded,
} from '../slices/recipesSlice';
import {
  createRecipeRequest,
  deleteRecipeRequest,
  fetchRecipesRequest,
  patchRecipeRequest,
} from './requests';

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
    yield put(getError(error.message));
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
    yield put(getError(error.message));
  } finally {
    yield put(loadingFinished());
  }
}

export function* deleteRecipeWorker({ payload }) {
  try {
    const { id } = payload;

    yield put(loadingStarted());
    const response = yield call(deleteRecipeRequest, id);
    if (!response.ok) {
      throw new Error('Recipe deleting server error.');
    }

    yield put(recipeDeleted({ id }));
  } catch (error) {
    yield put(getError(error.message));
  } finally {
    yield put(loadingFinished());
  }
}

export function* patchRecipeWorker({ payload }) {
  try {
    yield put(loadingStarted());
    const { id, ...data } = payload;
    const response = yield call(patchRecipeRequest, id, data);

    if (!response.ok) {
      throw new Error('Recipe patching server error.');
    }

    yield put(recipeEdited({ id, ...data }));
  } catch (error) {
    yield put(getError(error.message));
  } finally {
    yield put(loadingFinished());
  }
}
