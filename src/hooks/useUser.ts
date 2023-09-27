import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';

export function useUser() {
	async function getUser(userId: string) {
		const response = await getDoc(doc(db, 'users', userId));

		if (response.exists()) {
			return response.data() as IUser;
		} else {
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
