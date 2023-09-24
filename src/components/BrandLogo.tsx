import { twMerge } from 'tailwind-merge';

type IBrandLogo = {
	size?: 'md' | 'lg';
};

export function BrandLogo({ size = 'lg' }: IBrandLogo) {
	return (
		<div
			className={twMerge(
				'flex flex-col items-center font-brand font-bold',
				size === 'md' ? 'text-4xl' : 'text-5xl'
			)}
		>
			<span className='text-orange-500'>Teacher</span>
			<span>Progress</span>
		</div>
	);
}
