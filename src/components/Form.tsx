import { ComponentProps } from 'react';

type IForm = ComponentProps<'form'>

export function Form(props: IForm) {
	return (
		<form {...props} className='flex flex-col gap-3'/>
	);
}