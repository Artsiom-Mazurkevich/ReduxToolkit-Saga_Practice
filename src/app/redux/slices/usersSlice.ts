import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
	id: number
	name: string
	username: string
	email: string
	address: {
		street: string
		suite: string
		city: string
		zipcode: string
		geo: {
			lat: string
			lng: string
		}
	}
	phone: string
	website: string
	company: {
		name: string
		catchPhrase: string
		bs: string
	}
}

interface initialState {
	users: { [key: string]: User }
	loading: boolean
	error: string | null
}
const initialState: initialState = {
	error: null,
	loading: false,
	users: {},
}

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		fetchUserSuccess(state, action: PayloadAction<User[]>) {
			const users = action.payload
			const usersObj: { [key: string]: User } = {}

			users.forEach(user => {
				usersObj[user.id] = user
			})

			state.users = usersObj
		},
		loadingUsers(state, action: PayloadAction<boolean>) {
			state.loading = action.payload
		},
		userFetchingError(state, action: PayloadAction<string>) {
			state.error = action.payload
		},
		deleteUser(state, action: PayloadAction<string>) {
			delete state.users[action.payload]
		},
	},
})

export const { fetchUserSuccess, loadingUsers, userFetchingError, deleteUser } =
	usersSlice.actions

export default usersSlice.reducer
