import { takeLatest } from 'redux-saga/effects';
import { createRecipe, fetchRecipes } from '../slices/recipesSlice';
import { createRecipeWorker, fetchRecipesWorker } from './workers';

export function* watchRecipes() {
  yield takeLatest(fetchRecipes.type, fetchRecipesWorker);
  yield takeLatest(createRecipe.type, createRecipeWorker);
}
