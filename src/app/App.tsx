import {} from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from './redux/slices/usersSlice';
import { AppDispatch, RootState } from './redux/store';

function App() {
	const dispatch: AppDispatch = useDispatch();
	const users: User[] = useSelector((state: RootState) => state.users);
	console.log('users: ', users);

	useEffect(() => {
		dispatch({ type: 'USER_FETCH_REQUESTED' });
	}, [dispatch, users]);

	return (
		<>
			<div className='mx-20 h-screen py-24 flex justify-center flex-col'>
				{users && users.length > 0 ? (
					users.map(u => <div key={u.id}>{u.name}</div>)
				) : (
					<div>No users found</div>
				)}
			</div>
		</>
	);
}

export default App;
