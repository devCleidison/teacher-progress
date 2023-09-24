import { ComponentProps } from 'react';

type IInputLabel = ComponentProps<'label'> & {
  text: string;
}

export function InputLabel({ text, children, ...props }: IInputLabel) {
	return (
		<label {...props} className="flex flex-col gap-1" htmlFor={text}>
			<span className='font-medium'>{text}</span>
			{children}
		</label>
	);
}