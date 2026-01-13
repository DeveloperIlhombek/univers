import { navItems } from '@/constant'
import { DropdownMenuDemo } from './dropdown-navigation'

function Navigation() {
	return (
		<div className='relative bg-transparent/90 backdrop-blur-sm mx-auto max-w-8xl h-12 text-xl font-bold text-white flex items-center flex-row gap-4 justify-center'>
			<div className='z-40'>
				{navItems.map(item => (
					<DropdownMenuDemo
						key={item.label}
						open={item.label}
						routes={item.children ?? []}
					/>
				))}
			</div>
		</div>
	)
}

export default Navigation
