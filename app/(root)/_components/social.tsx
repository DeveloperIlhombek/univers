'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Send, Twitter, Youtube } from 'lucide-react'

const socialItems = [
	{
		title: 'Facebook',
		icon: Facebook,
		bgColor: 'hover:bg-blue-600',
		iconColor: 'text-blue-600',
		hoverIconColor: 'group-hover:text-white',
	},
	{
		title: 'Instagram',
		icon: Instagram,
		bgColor:
			'hover:bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500',
		iconColor: 'text-pink-600',
		hoverIconColor: 'group-hover:text-white',
	},
	{
		title: 'Twitter',
		icon: Twitter,
		bgColor: 'hover:bg-sky-500',
		iconColor: 'text-sky-500',
		hoverIconColor: 'group-hover:text-white',
	},
	{
		title: 'Youtube',
		icon: Youtube,
		bgColor: 'hover:bg-red-600',
		iconColor: 'text-red-600',
		hoverIconColor: 'group-hover:text-white',
	},
	{
		title: 'Telegram',
		icon: Send,
		bgColor: 'hover:bg-blue-500',
		iconColor: 'text-blue-500',
		hoverIconColor: 'group-hover:text-white',
	},
]

function Social() {
	return (
		<section className='py-10 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center'
				>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent uppercase'>
						BIZNI KUZATING
					</h2>
					<p className='text-slate-400 text-lg mb-12 max-w-2xl mx-auto'>
						Ijtimoiy tarmoqlarda bizni kuzatib boring va yangiliklar bilan
						tanishing
					</p>

					<div className='flex flex-wrap justify-center items-center gap-4 sm:gap-6'>
						{socialItems.map((item, index) => {
							const Icon = item.icon
							return (
								<motion.a
									key={item.title}
									href='#'
									initial={{ opacity: 0, scale: 0.5 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: index * 0.1 }}
									whileHover={{ scale: 1.1, y: -5 }}
									whileTap={{ scale: 0.95 }}
									className={`group relative ${item.bgColor} rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-lg hover:shadow-2xl bg-white/10 backdrop-blur-sm`}
								>
									<div className='flex items-center gap-3'>
										<Icon
											className={cn(
												'w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300',
												item.iconColor,
												item.hoverIconColor
											)}
										/>
										<span className='hidden sm:block text-slate-700 dark:text-slate-300 font-semibold text-lg group-hover:text-white transition-colors duration-300'>
											{item.title}
										</span>
									</div>

									{/* Glow effect */}
									<div className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-white blur-xl transition-opacity duration-300' />
								</motion.a>
							)
						})}
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default Social
