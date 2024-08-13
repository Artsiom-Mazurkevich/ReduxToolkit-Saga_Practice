import { Button, User } from '@nextui-org/react'
import { useAppDispatch, useAppSelector } from './redux/store'
import { useEffect } from 'react'
import { deleteUser } from './redux/slices/usersSlice'

function App() {
	const dispatch = useAppDispatch()

	const users = useAppSelector(state => state.usersReducer.users)
	const loading = useAppSelector(state => state.usersReducer.loading)

	return (
		<>
			<div className='h-screen w-full mx-auto py-5 flex flex-col items-center bg-gray-900 text-slate-200'>
				{/* {users && users.length > 0 ? (
					users.map(u => (
						<div className='flex w-1/2 items-center flex-row justify-between'>
							<User
								className='py-2 flex items-center justify-start'
								name={u.name}
								description={'Phone: ' + u.phone}
							/>
							<Button
								color='danger'
								variant='bordered'
								size='sm'
								className='min-w-0 px-1'
							>
								❌
							</Button>
						</div>
					))
				) : (
					<span>{loading ? 'loadilg user list' : 'user list is empty 🫤'}</span>
				)} */}

				{Object.keys(users).length > 0 ? (
					Object.keys(users).map((userId: string) => (
						<div
							key={userId}
							className='flex w-1/2 items-center flex-row justify-between'
						>
							<User
								className='py-2 flex items-center justify-start'
								name={users[userId].name}
								description={'Phone: ' + users[userId].phone}
							/>
							<Button
								color='danger'
								variant='bordered'
								size='sm'
								className='min-w-0 px-1'
								onClick={() => dispatch(deleteUser(userId))}
							>
								❌
							</Button>
						</div>
					))
				) : (
					<span>{loading ? 'loadilg user list' : 'user list is empty 🫤'}</span>
				)}

				<Button
					className='my-5 disabled:transform-none disabled:cursor-not-allowed disabled:hover:bg-pink-300'
					onClick={() => {
						dispatch({ type: 'USER_FETCH_REQUESTED' })
					}}
					disabled={Object.keys(users).length > 0 ? true : false}
				>
					Add users
				</Button>
			</div>
		</>
	)
}

export default App
