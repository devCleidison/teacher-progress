import { Frown, Smile } from 'lucide-react';

type IStatsCard= {
	title: number;
	description: string;
	status?: 'success' | 'fail';
};

export function StatsCard({ description, status, title }: IStatsCard) {
	return (
		<div className='flex flex-col items-center justify-center gap-2 h-44 relative bg-zinc-100 rounded overflow-hidden after:absolute after:bottom-0 after:left-16 after:rounded-tl-full after:w-full after:h-5 after:bg-orange-300'>
			{status === 'success' && (
				<div className='absolute top-4 right-4 p-2 bg-green-200 rounded-full text-green-500'>
					<Smile />
				</div>
			)}

			{status === 'fail' && (
				<div className='absolute top-4 right-4 p-2 bg-red-200 rounded-full text-red-500'>
					<Frown />
				</div>
			)}
			<h3 className='text-5xl font-bold'>{title}</h3>
			<p className='text-lg'>{description}</p>
		</div>
	);
}
