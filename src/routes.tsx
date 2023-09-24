import {
	Navigate,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { Login } from './pages/Login';

export const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/'>
			<Route index element={<Login />} />

			<Route path='*' element={<Navigate to='/' />} />
		</Route>
	)
);
