import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

type IInputIcon = {
	icon: ElementType;
	size?: 'sm' | 'md';
};

export function InputIcon({ icon: Icon, size = 'md' }: IInputIcon) {
	return (
		<Icon
			className={twMerge(
				'text-zinc-400',
				size === 'md' ? 'w-6 h-6' : 'w-5 h-5'
			)}
		/>
	);
}
