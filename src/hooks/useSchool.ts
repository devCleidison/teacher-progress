import { useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebase';
import { useError } from './useError';

export function useSchool() {
	const [schools, setSchools] = useState<IUser[]>([]);

	const { setError } = useError();

	async function getSchools() {
		try {
			const allSchools: IUser[] = [];

			const response = await getDocs(
				query(collection(db, 'users'), where('type', '==', 'school'))
			);

			response.forEach((school) => {
				if (school.exists()) {
					allSchools.push(school.data() as IUser);
				}
			});

			setSchools(allSchools);
			saveSchoolsOnLocalStorage(allSchools);
			return response;
		} catch (err) {
			setError('Erro ao buscar os dados das escolas!');
		}
	}

	async function saveSchoolsOnLocalStorage(schools: IUser[]) {
		localStorage.setItem('tpSchools', JSON.stringify(schools));
	}

	async function getSchoolsFromLocalStorage() {
		const response = localStorage.getItem('tpSchools');

		if (response) {
			const schoolsFromLocalStorage = JSON.parse(response);
			setSchools(schoolsFromLocalStorage);
			return schoolsFromLocalStorage;
		} else {
			const schoolsFromFirebase = await getSchools();
			return schoolsFromFirebase;
		}
	}

	async function removeSchoolsFromLocalStorage() {
		localStorage.removeItem('tpSchools');
	}

	return { schools, getSchoolsFromLocalStorage, removeSchoolsFromLocalStorage };
}
