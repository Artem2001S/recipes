import { call, put } from 'redux-saga/effects';
import {
  getError,
  loadingFinished,
  loadingStarted,
  recipesLoaded,
} from '../slices/recipesSlice';
import { fetchRecipesRequest } from './requests';

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
