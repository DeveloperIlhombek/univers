'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Calendar, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const newsData = [
	{
		id: 1,
		title: 'Aholi bilan yuzma-yuz muloqot: murojaatlar va amaliy yechimlar',
		description:
			"Alisher Navoiy nomidagi Toshkent davlat o'zbek tili va adabiyoti universiteti rektori, Xalq deputatlari Toshkent shahar...",
		date: '14-yanvar',
		image: '/news/news1.jpg',
		category: 'Muloqot',
	},
	{
		id: 2,
		title: "ToshDO'TAU vakillari Malayziyada malaka oshirmoqda",
		description:
			"2026-yilning 6-23 - yanvar kunlari Malayziya davlatining Sulton Idris nomidagi pedagogika universitetida tashkil etilgan 'O'...",
		date: '23-yanvar',
		image: '/news/news2.jpg',
		category: "Ta'lim",
	},
	{
		id: 3,
		title: "Professor-o'qituvchilar uchun maxsus seminarlar boshlandi",
		description:
			"2026-yil 6-yanvar kuni Alisher Navoiy nomidagi Toshkent davlat o'zbek tili va adabiyoti universitetida professor-o'qituvchilar...",
		date: '6-yanvar',
		image: '/news/news3.jpg',
		category: 'Seminar',
	},
]

export default function NewsSection() {
	const [selectedNews, setSelectedNews] = useState(newsData[0])
	const [hoveredId, setHoveredId] = useState<number | null>(null)

	return (
		<div className='min-h-screen  py-10 px-4'>
			<div className='max-w-7xl mx-auto'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'
				>
					<motion.h1
						className='text-4xl font-bold p-2 mb-3 bg-linear-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent uppercase'
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Yangiliklar
					</motion.h1>
					{/* <motion.div
						className='w-24 h-1 bg-linear-to-r from-blue-600 to-blue-400 mx-auto rounded-full'
						initial={{ width: 0 }}
						animate={{ width: 96 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					/> */}
				</motion.div>

				<div className='grid lg:grid-cols-2 gap-8'>
					{/* Main Featured News */}
					<motion.div layout className='lg:col-span-1'>
						<AnimatePresence mode='wait'>
							<motion.div
								key={selectedNews.id}
								initial={{ opacity: 0, x: -50 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: 50 }}
								transition={{ duration: 0.5 }}
								className='bg-white rounded-2xl shadow-2xl overflow-hidden group'
							>
								{/* Image Container */}
								<div className='relative h-100 overflow-hidden'>
									<motion.img
										src={selectedNews.image}
										alt={selectedNews.title}
										className='w-full h-full object-cover'
										whileHover={{ scale: 1.05 }}
										transition={{ duration: 0.6 }}
									/>
									<div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent' />

									{/* Category Badge */}
									<motion.div
										className='absolute top-6 left-6'
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.3 }}
									>
										<span className='px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg'>
											{selectedNews.category}
										</span>
									</motion.div>

									{/* Date sana */}
									<motion.div
										className='absolute top-6 right-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg'
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.3 }}
									>
										<Calendar className='w-4 h-4 text-blue-600' />
										<span className='text-sm font-medium text-gray-700'>
											{selectedNews.date}
										</span>
									</motion.div>
								</div>

								{/* Content */}
								<div className='p-8'>
									<motion.h2
										className='text-3xl font-bold text-gray-900 mb-4 leading-tight'
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2 }}
									>
										{selectedNews.title}
									</motion.h2>
									<motion.p
										className='text-gray-600 text-lg leading-relaxed mb-6'
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.3 }}
									>
										{selectedNews.description}
									</motion.p>
									<motion.button
										className='flex items-center gap-2 text-blue-600 font-semibold text-lg group/btn'
										whileHover={{ x: 5 }}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.4 }}
									>
										Batafsil oqish
										<ArrowRight className='w-5 h-5 group-hover/btn:translate-x-1 transition-transform' />
									</motion.button>
								</div>
							</motion.div>
						</AnimatePresence>
					</motion.div>

					{/* News List */}
					<div className='space-y-6'>
						{newsData.map((news, index) => (
							<motion.div
								key={news.id}
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								onMouseEnter={() => setHoveredId(news.id)}
								onMouseLeave={() => setHoveredId(null)}
								onClick={() => setSelectedNews(news)}
								className={`cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
									selectedNews.id === news.id
										? 'ring-2 ring-blue-600 shadow-2xl'
										: 'hover:shadow-xl'
								}`}
							>
								<div className='flex gap-4 p-4'>
									<motion.div
										className='relative w-32 h-32 shrink-0 rounded-lg overflow-hidden'
										whileHover={{ scale: 1.05 }}
										transition={{ duration: 0.3 }}
									>
										<Image
											src={news.image}
											alt={news.title}
											className='w-full h-full object-cover'
											fill
										/>
										<div className='absolute inset-0 bg-linear-to-br from-blue-600/20 to-transparent' />
									</motion.div>

									{/* Content */}
									<div className='flex-1 flex flex-col justify-between min-w-0'>
										<div>
											<div className='flex items-center gap-2 mb-2'>
												<span className='text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded'>
													{news.category}
												</span>
												<span className='text-xs text-gray-500 flex items-center gap-1'>
													<Calendar className='w-3 h-3' />
													{news.date}
												</span>
											</div>
											<h3 className='font-bold text-gray-900 mb-2 line-clamp-2 text-base leading-tight'>
												{news.title}
											</h3>
											<p className='text-sm text-gray-600 line-clamp-2'>
												{news.description}
											</p>
										</div>

										<motion.div
											className='flex items-center text-blue-600 text-sm font-medium mt-2'
											animate={{ x: hoveredId === news.id ? 5 : 0 }}
											transition={{ duration: 0.2 }}
										>
											O&apos;qish
											<ChevronRight className='w-4 h-4 ml-1' />
										</motion.div>
									</div>
								</div>
							</motion.div>
						))}

						{/* View All Button */}
						<motion.button
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className='w-full py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2'
						>
							<Link href={'/news'}>Barcha yangiliklar</Link>
							<ArrowRight className='w-5 h-5' />
						</motion.button>
					</div>
				</div>
			</div>
		</div>
	)
}
