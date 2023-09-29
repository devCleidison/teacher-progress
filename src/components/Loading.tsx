import { GraduationCap } from 'lucide-react';

export function Loading() {
	return (
		<div className='min-h-[100dvh] flex items-center justify-center'>
			<GraduationCap className='w-16 h-16 animate-bounce'/>
		</div>
	);
}
