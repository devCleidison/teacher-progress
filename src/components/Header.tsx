import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { UserInfo } from './UserInfo';

type IHeader = {
	title: string;
};

export function Header({ title }: IHeader) {
	const navigate = useNavigate();

	return (
		<header className='flex items-center justify-between w-[calc(100%-256px)] h-20 px-4 fixed bg-zinc-200'>
			<div className='flex items-center gap-2 text-2xl font-bold'>
				{title === 'Detalhes' ? (
					<>
						<button type='button' onClick={() => navigate(-1)}>
							<ArrowLeft />
						</button>
						<h1>{title}</h1>
					</>
				) : (
					<h1>{title}</h1>
				)}
			</div>

			<UserInfo />
		</header>
	);
}
