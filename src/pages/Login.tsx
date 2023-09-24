import { FormEvent, useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

import { BrandLogo } from '../components/BrandLogo';
import { Form } from '../components/Form';
import { Input, handlePasswordInputType } from '../components/Input';

export function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [isShowPassword, setIsShowPassword] = useState(false);

	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		if(!email || !password) {
			return;
		}
	}

	return (
		<div className='min-h-[100dvh] flex flex-col items-center justify-center gap-6'>
			<BrandLogo />

			<Form className='w-96' onSubmit={handleSubmit}>
				<Input.Root className='px-4 py-3 rounded'>
					<Input.Icon icon={Mail} />
					<Input.Text
						placeholder='E-mail'
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Input.Root>

				<Input.Root className='px-4 py-3 rounded'>
					<Input.Icon icon={Lock} />
					<Input.Text
						placeholder='Senha'
						type='password'
						id='loginInputPassword'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					{password && (
						<button
							type='button'
							onClick={() =>
								handlePasswordInputType({
									id: '#loginInputPassword',
									setState: setIsShowPassword,
									state: isShowPassword,
								})
							}
						>
							<Input.Icon icon={isShowPassword ? Eye : EyeOff} />
						</button>
					)}
				</Input.Root>

				<button
					type='submit'
					className='flex items-center justify-center px-4 py-3 rounded mt-2 bg-slate-800 text-zinc-100 font-medium'
				>
					Entrar
				</button>
			</Form>
		</div>
	);
}
