import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type IForm = ComponentProps<'form'>;

export function Form({ className, ...props }: IForm) {
	return (
		<form {...props} className={twMerge('flex flex-col gap-3', className)} />
	);
}
