import { RouterProvider } from 'react-router-dom';
import {
	privateAdminRoutes,
	privateSchoolRoutes,
	publicRoutes,
} from './routes';
import { useAuth } from './hooks/useAuth';
import { Loading } from './components/Loading';

export function App() {
	const { user, isLoading } = useAuth();

	if(isLoading) {
		return <Loading />;
	}

	return (
		<RouterProvider
			router={
				user
					? user?.type === 'admin'
						? privateAdminRoutes
						: privateSchoolRoutes
					: publicRoutes
			}
		/>
	);
}
