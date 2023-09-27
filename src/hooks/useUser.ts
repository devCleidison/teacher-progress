import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';

export function useUser() {
	async function getUser(userId: string) {
		const response = await getDoc(doc(db, 'users', userId));

		if(response.exists()) {
			return response.data() as IUser;
		} else {
			return null;
		}
	}

	async function saveUserOnLocalStorage(user: IUser) {
		localStorage.setItem('tpUser', JSON.stringify(user));
	}

	return { getUser, saveUserOnLocalStorage };
}