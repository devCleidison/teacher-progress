import { ReactNode } from 'react';
import { ErrorProvider } from './ErrorContext';
import { AuthProvider } from './AuthContext';

type IAppProvider = {
  children: ReactNode;
}

export function AppProvider({ children }: IAppProvider) {
	return (
		<ErrorProvider>
			<AuthProvider>
				{children}
			</AuthProvider>
		</ErrorProvider>
	);
}