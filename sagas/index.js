/* eslint-disable prettier/prettier */
// sagas/index.js
import {all} from 'redux-saga/effects';
import {MovieSagas} from './movieSaga';

export default function* rootSaga() {
  yield all([
    ...MovieSagas
  ]);
}