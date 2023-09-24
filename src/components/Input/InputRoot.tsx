import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type IInputRoot = ComponentProps<'div'>;

export function InputRoot({ children, className, ...props }: IInputRoot) {
	return (
		<div
			{...props}
			className={twMerge('flex items-center gap-3 bg-zinc-100', className)}
		>
			{children}
		</div>
	);
}
