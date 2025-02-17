import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/redux/store.ts'
import { NextUIProvider } from '@nextui-org/react'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<NextUIProvider>
		<Provider store={store}>
			<App />
		</Provider>
	</NextUIProvider>,
)
