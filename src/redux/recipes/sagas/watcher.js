import { takeLatest } from 'redux-saga/effects';
import {
  createRecipe,
  deleteRecipe,
  fetchRecipes,
  patchRecipe,
} from '../slices/recipesSlice';
import {
  createRecipeWorker,
  deleteRecipeWorker,
  fetchRecipesWorker,
  patchRecipeWorker,
} from './workers';

export function* watchRecipes() {
  yield takeLatest(fetchRecipes.type, fetchRecipesWorker);
  yield takeLatest(createRecipe.type, createRecipeWorker);
  yield takeLatest(deleteRecipe.type, deleteRecipeWorker);
  yield takeLatest(patchRecipe.type, patchRecipeWorker);
}
