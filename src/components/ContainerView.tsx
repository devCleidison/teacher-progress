import { useEffect } from 'react';
import { useSchool } from '../hooks/useSchool';
import { Card } from './Card';

type IContainerView = {
	type: 'users' | 'schools' | 'teachers';
};

export function ContainerView({ type }: IContainerView) {
	const { getSchoolsFromLocalStorage, schools } = useSchool();

	useEffect(() => {
		type === 'schools' && getSchoolsFromLocalStorage();
	}, []);

	return (
		<div className='grid grid-cols-2 gap-4'>
			{type === 'schools' &&
				schools.map((school) => <Card.School key={school.id} data={school} />)}
		</div>
	);
}
