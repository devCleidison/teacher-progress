import {
	Navigate,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { Login } from './pages/Login';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

const user = true;

export const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/'>
			<Route index element={user ? <Navigate to='home' /> : <Login />} />

			{user && (
				<Route>
					<Route
						path='home'
						element={
							<Layout title='Início'>
								<Home />
							</Layout>
						}
					/>
				</Route>
			)}

			<Route path='*' element={<Navigate to='/' />} />
		</Route>
	)
);
