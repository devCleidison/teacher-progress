import {
	doc,
	getDoc,
} from 'firebase/firestore';
import { db } from '../services/firebase';
import { useError } from './useError';

export function useUser() {
	const { setError } = useError();

	async function getUser(userId: string) {
		const response = await getDoc(doc(db, 'users', userId));

		if (response.exists()) {
			return response.data() as IUser;
		} else {
			setError('Os dados do usuário não foram encontrados!');
			return null;
		}
	}

	async function saveUserOnLocalStorage(user: IUser) {
		localStorage.setItem('tpUser', JSON.stringify(user));
	}

	async function getUserFromLocalStorage() {
		const response = localStorage.getItem('tpUser');

		if (response) {
			return JSON.parse(response) as IUser;
		} else {
			setError('Os dados do usuário não foram encontrados!');
			return null;
		}
	}

	async function removeUserFromLocalStorage() {
		localStorage.removeItem('tpUser');
	}

	return {
		getUser,
		saveUserOnLocalStorage,
		getUserFromLocalStorage,
		removeUserFromLocalStorage,
	};
}
