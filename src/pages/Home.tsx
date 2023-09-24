import { Banner } from '../components/Banner';
import { StatsCard } from '../components/StatsCard';

const stats: IStats[] = [
	{
		title: 15,
		description: 'Professores',
	},
	{
		title: 10,
		description: 'Professores avaliados',
		status: 'success',
	},
	{
		title: 5,
		description: 'Professores não avaliados',
		status: 'fail',
	},
];

export function Home() {
	return (
		<div className='h-full pt-4'>
			<Banner />

			<div className='grid grid-cols-3 gap-6 mt-10'>
				{stats.map((stat) => (
					<StatsCard
						key={stat.title}
						description={stat.description}
						title={stat.title}
						status={stat.status}
					/>
				))}
			</div>
		</div>
	);
}
