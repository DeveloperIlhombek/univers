'use client'

import { Button } from '@/components/ui/button'
import Logo from '@/components/ui/header/logo'
import Navigation from '@/components/ui/header/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import SearchBar from './search'

function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false)
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	return (
		<div
			className='relative h-42 container  max-w-8xl mx-auto flex flex-col justify-center px-12 items-center'
			style={{ backgroundImage: "url('/banner.png')" }}
		>
			<div className='h-32 container  max-w-8xl mx-auto flex justify-between px-12 items-center'>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					className='max-w-md'
				>
					<h1 className='text-white text-lg font-bold leading-tight drop-shadow-lg flex items-center justify-center gap-2'>
						<Logo />
						<p>
							Alisher Navoiy nomidagi Toshkent davlat o&apos;zbek tili va
							adabiyot universiteti
						</p>{' '}
					</h1>
				</motion.div>

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
					<SearchBar />
				</div>
			</div>
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.2 }}
				className={`sticky top-0 z-40 transition-all duration-300 ${
					isScrolled ? 'shadow-lg' : ''
				}`}
			>
				<Navigation />
			</motion.div>
		</div>
	)
}

export default Navbar
