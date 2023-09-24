import { School, User } from 'lucide-react';

const user: IUser = {
	id: '1',
	name: 'Cleidison Silva',
	email: 'cleidison.dev@gmail.com',
	avatarUrl: 'https://avatars.githubusercontent.com/u/67656036?v=4',
	type: 'admin',
};

export function UserInfo() {
	return (
		<div className='flex items-center gap-3'>
			<div className='flex items-center justify-center rounded-full overflow-hidden w-11 h-11 bg-zinc-100 text-zinc-400'>
				{user.type === 'admin' ? (
					user.avatarUrl ? (
						<img src={user.avatarUrl} alt={`Foto de ${user.name}`} />
					) : (
						<User />
					)
				) : user.avatarUrl ? (
					<img src={user.avatarUrl} alt={`Foto de ${user.name}`} />
				) : (
					<School />
				)}
			</div>

			<div className='flex flex-col'>
				<span className='font-medium leading-5'>{user.name}</span>
				<span className='text-sm text-zinc-500 leading-5'>{user.email}</span>
			</div>
		</div>
	);
}
