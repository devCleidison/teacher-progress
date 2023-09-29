import {
	Navigate,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { Login } from './pages/Login';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Schools } from './pages/Schools';

export const privateAdminRoutes = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/'>
			<Route index element={<Navigate to='home' />} />

			<Route
				path='home'
				element={
					<Layout title='Início'>
						<Home />
					</Layout>
				}
			/>

			<Route
				path='schools'
				element={
					<Layout title='Escolas'>
						<Schools />
					</Layout>
				}
			/>

			<Route path='*' element={<Navigate to='home' />} />
		</Route>
	)
);

export const privateSchoolRoutes = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/'>
			<Route index element={<Navigate to='home' />} />

			<Route
				path='home'
				element={
					<Layout title='Início'>
						<Home />
					</Layout>
				}
			/>

			<Route path='*' element={<Navigate to='home' />} />
		</Route>
	)
);

export const publicRoutes = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/'>
			<Route index element={<Login />} />

			<Route path='*' element={<Navigate to='/' />} />
		</Route>
	)
);
