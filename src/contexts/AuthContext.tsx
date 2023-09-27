import { ReactNode, createContext, useEffect, useState } from 'react';
import {
	browserSessionPersistence,
	onAuthStateChanged,
	setPersistence,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { auth } from '../services/firebase';
import { useError } from '../hooks/useError';
import { useUser } from '../hooks/useUser';

type IAuthContext = {
	isAuthenticated: boolean;
	user: IUser | null;
	isLoading: boolean;
	handleLogin: (email: string, password: string) => Promise<void>;
	handleLogout: () => Promise<void>;
};

type IAuthProvider = {
	children: ReactNode;
};

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: IAuthProvider) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState<IUser | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const { setError } = useError();
	const {
		getUser,
		saveUserOnLocalStorage,
		getUserFromLocalStorage,
		removeUserFromLocalStorage,
	} = useUser();

	async function handleLogin(email: string, password: string) {
		setIsLoading(true);
		setPersistence(auth, browserSessionPersistence)
			.then(() => {
				return signInWithEmailAndPassword(auth, email, password);
			})
			.catch(() => {
				setError('Usuário ou senha inválidos!');
			})
			.finally(async () => {
				if (auth.currentUser) {
					setIsAuthenticated(true);

					const response = await getUser(auth.currentUser.uid);
					setUser(response);

					response && saveUserOnLocalStorage(response);
				}
				setIsLoading(false);
			});
	}

	async function handleLogout() {
		await signOut(auth)
			.catch(() => {
				setError('Erro ao sair!');
			})
			.finally(async () => {
				setIsAuthenticated(false);
				setUser(null);
				await removeUserFromLocalStorage();
			});
	}

	useEffect(() => {
		onAuthStateChanged(auth, async (isLogged) => {
			if (isLogged) {
				setIsAuthenticated(true);

				const response = await getUserFromLocalStorage();
				setUser(response);
			} else {
				setIsAuthenticated(false);
				setUser(null);
			}
		});
	}, [auth]);

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, user, isLoading, handleLogin, handleLogout }}
		>
			{children}
		</AuthContext.Provider>
	);
}
