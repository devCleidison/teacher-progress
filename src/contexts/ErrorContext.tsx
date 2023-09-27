import { ReactNode, createContext, useState } from 'react';

type IErrorContext = {
  error: string;
  setError: (error: string) => void;
}

type IErrorProvider = {
  children: ReactNode;
}

export const ErrorContext = createContext({} as IErrorContext);

export function ErrorProvider({ children }: IErrorProvider) {
	const [error, setError] = useState('');

	return (
		<ErrorContext.Provider value={{ error, setError }}>
			{children}
		</ErrorContext.Provider>
	);
}