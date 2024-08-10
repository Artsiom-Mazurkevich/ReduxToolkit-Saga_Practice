import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

const initialState: User[] = [];

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		fetchUserSuccess(state, action) {
			console.log('fetchUserSuccess called');
			return action.payload;
		},
	},
});

export const { fetchUserSuccess } = usersSlice.actions;

export default usersSlice.reducer;
