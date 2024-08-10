import { all } from 'redux-saga/effects';
import { watchFetchUsers } from './usersSaga';

export default function* rootSaga() {
	yield all([watchFetchUsers()]);
}
