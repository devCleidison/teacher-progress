import { RouterProvider } from 'react-router-dom';
import {
	privateAdminRoutes,
	privateSchoolRoutes,
	publicRoutes,
} from './routes';
import { useAuth } from './hooks/useAuth';

export function App() {
	const { isAuthenticated, user } = useAuth();

	return (
		<RouterProvider
			router={
				isAuthenticated
					? user?.type === 'admin'
						? privateAdminRoutes
						: privateSchoolRoutes
					: publicRoutes
			}
			future={{ v7_startTransition: true }}
		/>
	);
}
