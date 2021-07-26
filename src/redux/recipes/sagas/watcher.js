import { takeLatest } from 'redux-saga/effects';
import { fetchRecipes } from '../slices/recipesSlice';
import { fetchRecipesWorker } from './workers';

export function* watchRecipes() {
  yield takeLatest(fetchRecipes.type, fetchRecipesWorker);
}
