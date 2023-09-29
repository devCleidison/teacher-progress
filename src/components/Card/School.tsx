import { School as SchoolIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

type ISchool = {
	data: IUser;
};

export function School({ data }: ISchool) {
	return (
		<Link
			to={`/schools/${data.id}`}
			className='flex items-center gap-3 bg-zinc-50 px-4 py-3 rounded'
		>
			<div className='flex items-center justify-center rounded-full overflow-hidden w-11 h-11 bg-orange-300 text-zinc-50'>
				{data?.avatarUrl ? (
					<img src={data.avatarUrl} alt={`Foto de ${data.name}`} />
				) : (
					<SchoolIcon />
				)}
			</div>

			<div className='flex flex-col'>
				<span className='font-medium leading-5'>{data.name}</span>
				<span className='text-sm text-zinc-500 leading-5'>{data.email}</span>
			</div>
		</Link>
	);
}
