import { ComponentProps } from 'react';

type IInputText = ComponentProps<'input'>;

export function InputText(props: IInputText) {
	return (
		<input
			{...props}
			className='flex-1 bg-transparent outline-none placeholder:text-zinc-400'
		/>
	);
}
