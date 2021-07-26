import { all } from 'redux-saga/effects';
import { watchRecipes } from './recipes/sagas/watcher';

export function* rootSaga() {
  yield all([watchRecipes()]);
}
