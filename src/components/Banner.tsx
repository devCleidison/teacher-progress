import BannerImg from '../assets/banner-image.svg';

export function Banner() {
	return (
		<div className='flex bg-orange-300 rounded h-80 p-10 relative'>
			<div className='flex flex-col justify-between w-1/2'>
				<div>
					<h1 className='text-3xl font-bold mb-3'>Bem-vindo (a)!</h1>
					<p>
						Este é o{' '}
						<span className='font-brand text-2xl'>Teacher Progress.</span>
					</p>
					<p>
						Com ele você poderá acompanhar e avaliar os professores efetivos que
						estão participando da{' '}
						<em className='font-bold'>progressão funcional.</em>
					</p>
				</div>

				<p className='font-medium'>Obs.: Atenção aos prazos das avaliações!</p>
			</div>

			<img
				src={BannerImg}
				alt='Ilustração de um professor ministrando aula'
				className='absolute h-[105%] bottom-0 right-6'
			/>
		</div>
	);
}
