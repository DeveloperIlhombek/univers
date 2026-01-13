import { Button } from '@/components/ui/button'
import Logo from '@/components/ui/header/logo'
import Navigation from '@/components/ui/header/navigation'
import Image from 'next/image'

function Navbar() {
	return (
		<div
			className='relative h-42 container  max-w-8xl mx-auto flex flex-col justify-center px-12 items-center'
			style={{ backgroundImage: "url('/banner.png')" }}
		>
			<div className='h-32 container  max-w-8xl mx-auto flex justify-between px-12 items-center'>
				<div className='text-2xl font-bold w-xl text-white'>
					Alisher Navoiy nomidagi Toshkent davlat o&apos;zbek tili va adabiyot
					universiteti
				</div>
				<div className='absolute top-0 left-1/2 -translate-x-1/2 border-white/50 px-6 pt-4 pb-8 rounded-b-full bg-black/70'>
					<Logo />
				</div>
				<div className='flex flex-col gap-2 text-white'>
					<div className=' flex gap-8'>
						<div className='flex items-center gap-4'>
							<span>Tillar:</span>
							<Image src={'/local/uz.png'} alt='en' width={30} height={20} />
							<Image src={'/local/en.png'} alt='en' width={30} height={20} />
							<Image src={'/local/ru.png'} alt='en' width={30} height={20} />
						</div>
						<Button className='bg-blue-500 px-3'>Apply now</Button>
					</div>
					<div>Search</div>
				</div>
			</div>
			<div className='absolute inset-0 bg-black/30 w-full h-12 z-10' />
			<Navigation />
		</div>
	)
}

export default Navbar
