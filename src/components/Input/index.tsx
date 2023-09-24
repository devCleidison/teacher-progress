import { InputIcon } from './InputIcon';
import { InputLabel } from './InputLabel';
import { InputRoot } from './InputRoot';
import { InputText } from './InputText';

export const Input = {
	Root: InputRoot,
	Icon: InputIcon,
	Text: InputText,
	Label: InputLabel,
};


type IProps = {
	id: string;
	state: boolean;
	setState: (value: boolean) => void;
};

export function handlePasswordInputType({ id, setState, state }: IProps) {
	const inputPass = document.querySelector(id);

	if(state) {
		setState(false);
		inputPass?.setAttribute('type', 'password');
	} else {
		setState(true);
		inputPass?.setAttribute('type', 'text');
	}
}