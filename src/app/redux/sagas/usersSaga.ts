import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchUserSuccess, User } from '../slices/usersSlice';

const getUsers = async (): Promise<User[]> => {
	const response: Response = await fetch(
		'https://jsonplaceholder.typicode.com/users',
	);
	const users: User[] = await response.json();
	return users;
};

function* fetchUsersWorkerSaga() {
	console.log('fetchUsersWorkerSaga called');

	const users: User[] = yield call(getUsers);
	console.log('users in worker saga', users);

	yield put(fetchUserSuccess(users));
}

export function* watchFetchUsers() {
	yield takeEvery('USER_FETCH_REQUESTED', fetchUsersWorkerSaga);
}
