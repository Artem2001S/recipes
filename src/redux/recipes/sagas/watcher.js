import { takeLatest } from 'redux-saga/effects';
import {
  createRecipe,
  deleteRecipe,
  fetchRecipes,
} from '../slices/recipesSlice';
import {
  createRecipeWorker,
  deleteRecipeWorker,
  fetchRecipesWorker,
} from './workers';

export function* watchRecipes() {
  yield takeLatest(fetchRecipes.type, fetchRecipesWorker);
  yield takeLatest(createRecipe.type, createRecipeWorker);
  yield takeLatest(deleteRecipe.type, deleteRecipeWorker);
}
