import { configureStore, Dispatch } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'
import { USER_FETCH_REQUESTED } from './sagas/usersSaga'
import usersReducer from './slices/usersSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
	reducer: {
		usersReducer,
	},
	devTools: true,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			thunk: false,
			serializableCheck: false,
		}).concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
