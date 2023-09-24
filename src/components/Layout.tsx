import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

type ILayout = {
	title: string;
	children: ReactNode;
};

export function Layout({ children, title }: ILayout) {
	return (
		<div className='flex min-h-[100dvh]'>
			<Sidebar />

			<div className='ml-64 flex-1'>
				<Header title={title}/>

				<main className='mt-20 px-4 pb-4 h-[calc(100%-80px)]'>{children}</main>
			</div>
		</div>
	);
}
