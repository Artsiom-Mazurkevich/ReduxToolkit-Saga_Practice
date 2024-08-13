import { call, put, takeEvery } from 'redux-saga/effects'
import {
	fetchUserSuccess,
	loadingUsers,
	User,
	userFetchingError,
} from '../slices/usersSlice'

export const getUsers = async (): Promise<User[]> => {
	try {
		const response: Response = await fetch(
			'https://jsonplaceholder.typicode.com/users',
		)
		const users: User[] = await response.json()
		return users
	} catch (error: any) {
		console.error(error)

		return error
	}
}

function* fetchUsersWorkerSaga() {
	try {
		yield put(loadingUsers(true))
		const users: User[] = yield call(getUsers)
		yield put(loadingUsers(false))
		yield put(fetchUserSuccess(users))
	} catch (error: any) {
		yield put(userFetchingError(error.message))
	}
}

export function* watchFetchUsers() {
	yield takeEvery('USER_FETCH_REQUESTED', fetchUsersWorkerSaga)
}

export type USER_FETCH_REQUESTED = {
	type: 'USER_FETCH_REQUESTED'
}
