'use client'

import Logo from '@/components/ui/header/logo'
import { easeInOut, motion } from 'framer-motion'
import {
	Bus,
	ExternalLink,
	Mail,
	MapPin,
	Phone,
	Train,
	Video,
} from 'lucide-react'

export default function UniversityFooter() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: easeInOut,
			},
		},
	}

	const logoVariants = {
		hidden: { opacity: 0, scale: 0.8, rotate: -10 },
		visible: {
			opacity: 1,
			scale: 1,
			rotate: 0,
			transition: {
				duration: 0.7,
				ease: easeInOut,
			},
		},
	}

	const hoverEffect = {
		scale: 1.05,
		transition: { duration: 0.2 },
	}

	return (
		<footer className='bg-linear-to-br from-[#0d2847] via-[#1a3a5c] to-[#0d2847] text-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'
				>
					{/* Logo and University Name Section */}
					<motion.div variants={itemVariants} className='space-y-6'>
						<motion.div
							variants={logoVariants}
							className='flex items-center space-x-4'
						>
							<div className='w-16 h-16 lg:w-20 lg:h-20 relative'>
								<Logo />
							</div>
						</motion.div>

						<h3 className='text-lg lg:text-xl font-semibold leading-tight'>
							Alisher Navoiy nomidagi Toshkent davlat ozbek tili va adabiyoti
							universiteti
						</h3>

						<motion.button
							whileHover={hoverEffect}
							whileTap={{ scale: 0.95 }}
							className='flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full transition-all duration-300 border border-white/20'
						>
							<MapPin size={18} />
							<span className='font-medium'>UNIVERSITET XARITASI</span>
						</motion.button>

						<p className='text-sm text-white/70'>© 2022 TSUULL</p>

						<p className='text-xs text-white/60'>Powered by Ilhom</p>
					</motion.div>

					{/* Contact Information */}
					<motion.div variants={itemVariants} className='space-y-4'>
						<h4 className='text-xl font-bold mb-6 border-b border-white/20 pb-2'>
							TSUULL
						</h4>

						<motion.div
							whileHover={hoverEffect}
							className='flex items-start space-x-3 group cursor-pointer'
						>
							<MapPin
								className='mt-1 shrink-0 text-blue-300 group-hover:text-blue-200 transition-colors'
								size={20}
							/>
							<p className='text-sm leading-relaxed'>
								Manzil: Toshkent shahri, Yakkasaroy tumani, Yusuf Xos Hojib
								kochasi, 103-uy
							</p>
						</motion.div>

						<motion.div
							whileHover={hoverEffect}
							className='flex items-center space-x-3 group cursor-pointer'
						>
							<Phone
								className='shrink-0 text-green-300 group-hover:text-green-200 transition-colors'
								size={20}
							/>
							<a href='tel:+998712814244' className='text-sm hover:underline'>
								Telefon: +99(871) 281-42-44
							</a>
						</motion.div>

						<motion.div
							whileHover={hoverEffect}
							className='flex items-center space-x-3 group cursor-pointer'
						>
							<Mail
								className='shrink-0 text-red-300 group-hover:text-red-200 transition-colors'
								size={20}
							/>
							<a
								href='mailto:interdep@navoiy-uni.uz'
								className='text-sm hover:underline'
							>
								E-mail: interdep@navoiy-uni.uz
							</a>
						</motion.div>

						<motion.div
							whileHover={hoverEffect}
							className='flex items-start space-x-3 group cursor-pointer'
						>
							<Bus
								className='mt-1 shrink-0 text-yellow-300 group-hover:text-yellow-200 transition-colors'
								size={20}
							/>
							<p className='text-sm'>
								Avtobuslar: 11, 32, 47, 76, 77, 81, 98, 126, 140
							</p>
						</motion.div>

						<motion.div
							whileHover={hoverEffect}
							className='flex items-start space-x-3 group cursor-pointer'
						>
							<Train
								className='mt-1 shrink-0 text-purple-300 group-hover:text-purple-200 transition-colors'
								size={20}
							/>
							<p className='text-sm'>
								Metro: Xalqlar dostligi bekati, Oybek bekati
							</p>
						</motion.div>

						<motion.a
							href='#'
							whileHover={hoverEffect}
							className='flex items-center space-x-3 text-cyan-300 hover:text-cyan-200 group'
						>
							<Video size={20} />
							<span className='text-sm underline'>Virtual sayohat</span>
							<ExternalLink
								size={16}
								className='group-hover:translate-x-1 transition-transform'
							/>
						</motion.a>

						<motion.div
							whileHover={hoverEffect}
							className='flex items-center space-x-3 group cursor-pointer'
						>
							<Phone
								className='shrink-0 text-green-300 group-hover:text-green-200 transition-colors'
								size={20}
							/>
							<a href='tel:+998712815166' className='text-sm hover:underline'>
								Ishonch telefoni: +99(871) 281-51-66
							</a>
						</motion.div>
					</motion.div>

					{/* About Us Section */}
					<motion.div variants={itemVariants} className='space-y-4'>
						<h4 className='text-xl font-bold mb-6 border-b border-white/20 pb-2'>
							BIZ HAQIMIZDA
						</h4>

						{[
							'Universitet tarixi',
							'Missiya',
							'Korrupsiyaga qarshi kurash',
							'Bizning faxrimiz',
							'Kontrakt narxlari',
							'Kutubxona',
							'Muzeylar',
							'Sport',
						].map((item, index) => (
							<motion.a
								key={index}
								href='#'
								whileHover={{ x: 5, color: '#60a5fa' }}
								className='block text-sm text-white/80 hover:text-blue-300 transition-all duration-200'
							>
								{item}
							</motion.a>
						))}
					</motion.div>

					{/* Useful Links Section */}
					<motion.div variants={itemVariants} className='space-y-4'>
						<h4 className='text-xl font-bold mb-6 border-b border-white/20 pb-2'>
							FOYDALI HAVOLALAR
						</h4>

						{[
							'Savoal va javob',
							"Bo'sh ish o'rinlari",
							'Ilmiy jurnallar',
							'Ilmiy kengash',
							"Masofaviy ta'lim",
							'Xorijiy talabalar uchun',
							"Ta'lim yo'nalishlari",
						].map((item, index) => (
							<motion.a
								key={index}
								href='#'
								whileHover={{ x: 5, color: '#60a5fa' }}
								className='block text-sm text-white/80 hover:text-blue-300 transition-all duration-200'
							>
								{item}
							</motion.a>
						))}
					</motion.div>
				</motion.div>
			</div>

			{/* Decorative gradient overlay */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.1 }}
				transition={{ duration: 2 }}
				className='absolute inset-0 bg-linear-to-t from-blue-500/10 via-transparent to-transparent pointer-events-none'
			/>
		</footer>
	)
}
