import { NavLink } from 'react-router-dom';
import { Home, LogOut, School } from 'lucide-react';

import { BrandLogo } from './BrandLogo';
import { useAuth } from '../hooks/useAuth';

export function Sidebar() {
	const { handleLogout, user } = useAuth();

	return (
		<aside className='min-h-screen w-64 fixed flex flex-col items-center justify-between py-10 bg-zinc-100'>
			<BrandLogo size='md' />

			<nav className='w-full'>
				<ul className='w-full flex flex-col px-4 gap-1'>
					<li>
						<NavLink
							to='/home'
							className={({ isActive }) =>
								isActive
									? 'flex items-center gap-2 text-lg font-medium px-4 py-2 rounded text-zinc-100  bg-orange-500'
									: 'flex items-center gap-2 text-lg font-medium px-4 py-2 rounded'
							}
						>
							<Home />
							Início
						</NavLink>
					</li>

					{user?.type === 'admin' && (
						<>
							<li>
								<NavLink
									to='/schools'
									className={({ isActive }) =>
										isActive
											? 'flex items-center gap-2 text-lg font-medium px-4 py-2 rounded text-zinc-100  bg-orange-500'
											: 'flex items-center gap-2 text-lg font-medium px-4 py-2 rounded'
									}
								>
									<School />
									Escolas
								</NavLink>
							</li>
						</>
					)}
				</ul>
			</nav>

			<button
				type='button'
				className='flex items-center gap-2 text-lg'
				onClick={handleLogout}
			>
				<LogOut />
				Sair
			</button>
		</aside>
	);
}
