'use client'
import { AnimatePresence, motion } from 'framer-motion'
import {
	Calendar,
	ChevronLeft,
	ChevronRight,
	Clock,
	Filter,
	Home,
	Search,
	X,
} from 'lucide-react'
import Image from 'next/image'
import { useMemo, useState } from 'react'

const allNews = [
	{
		id: 1,
		title: 'Aholi bilan yuzma-yuz muloqot: murojaatlar va amaliy yechimlar',
		excerpt:
			"Alisher Navoiy nomidagi Toshkent davlat o'zbek tili va adabiyoti universiteti rektori, Xalq deputatlari Toshkent shahar...",
		content:
			"Alisher Navoiy nomidagi Toshkent davlat o'zbek tili va adabiyoti universiteti rektori, Xalq deputatlari Toshkent shahar Kengashining deputati Nurilloev Shukurillo Ergashevich tomonidan aholining murojaatlari bo'yicha navbatdagi qabullar o'tkazildi. Qabul davomida fuqarolarning turli masalalariga oid so'rovlar tinglab eshitildi va ularning yechimiga qaratilgan konkret chora-tadbirlar belgilandi.",
		date: '14-yanvar, 2026',
		readTime: '5 daqiqa',
		image: '/news/news1.jpg',
		category: 'Muloqot',
		images: ['/news/news1.jpg', '/news/news1.jpg', '/news/news1.jpg'],
	},
	{
		id: 2,
		title: "ToshDO'TAU vakillari Malayziyada malaka oshirmoqda",
		excerpt:
			'2026-yilning 6-23 - yanvar kunlari Malayziya davlatining Sulton Idris nomidagi pedagogika universitetida...',
		content:
			"2026-yilning 6-23 - yanvar kunlari Malayziya davlatining Sulton Idris nomidagi pedagogika universitetida tashkil etilgan O'qituvchilar uchun xalqaro malaka oshirish dasturida universitetimiz professor-o'qituvchilari faol ishtirok etmoqdalar. Dastur davomida zamonaviy pedagogik texnologiyalar, innovative ta'lim metodlari va xalqaro tajribalar bilan tanishilmoqda.",
		date: '23-yanvar, 2026',
		readTime: '4 daqiqa',
		image: '/news/news1.jpg',
		category: "Ta'lim",
		images: ['/news/news1.jpg', '/news/news1.jpg'],
	},
	{
		id: 3,
		title: "Professor-o'qituvchilar uchun maxsus seminarlar boshlandi",
		excerpt:
			"2026-yil 6-yanvar kuni Alisher Navoiy nomidagi Toshkent davlat o'zbek tili va adabiyoti universitetida...",
		content:
			"Universitetimizda professor-o'qituvchilar malakasini oshirish maqsadida maxsus seminarlar tashkil etildi. Seminarlarda ilg'or xorijiy tajribalar, zamonaviy ta'lim metodlari va raqamli texnologiyalardan foydalanish masalalari muhokama qilindi. Tadbirda 150 dan ortiq professor-o'qituvchilar qatnashdi.",
		date: '6-yanvar, 2026',
		readTime: '6 daqiqa',
		image: '/news/news1.jpg',
		category: 'Seminar',
		images: [
			'/news/news1.jpg',
			'/news/news1.jpg',
			'/news/news1.jpg',
			'/news/news1.jpg',
		],
	},
	{
		id: 4,
		title: 'Xalqaro hamkorlik: yangi imkoniyatlar',
		excerpt:
			"Universitetimiz xalqaro hamkorlik bo'yicha yangi shartnomalar imzoladi...",
		content:
			"Universitetimiz Osiyo va Yevropa mamlakatlarining yetakchi oliy ta'lim muassasalari bilan hamkorlik shartnomalarini imzoladi. Shartnomalar doirasida talabalar almashinuvi, qo'shma tadqiqot dasturlari va akademik mobilligi kengaytiriladi.",
		date: '10-yanvar, 2026',
		readTime: '3 daqiqa',
		image: '/news/news1.jpg',
		category: 'Hamkorlik',
		images: [
			'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
		],
	},
	{
		id: 5,
		title: 'Talabalar ilmiy konferensiyasi yakunlandi',
		excerpt:
			"Universitetda yosh tadqiqotchilar uchun respublika miqyosidagi ilmiy konferensiya bo'lib o'tdi...",
		content:
			"Respublika miqyosidagi yosh tadqiqotchilar ilmiy-amaliy konferensiyasi muvaffaqiyatli yakunlandi. Konferensiyada 200 dan ortiq talabalar o'z tadqiqot ishlarini taqdim etdi. Eng yaxshi ishlar mukofotlarga sazovor bo'ldi.",
		date: '18-yanvar, 2026',
		readTime: '4 daqiqa',
		image: '/news/news1.jpg',
		category: 'Konferensiya',
		images: ['/news/news1.jpg', '/news/news1.jpg'],
	},
	{
		id: 6,
		title: 'Yangi kutubxona majmuasi ochildi',
		excerpt:
			'Universitet hududida zamonaviy kutubxona majmuasi foydalanishga topshirildi...',
		content:
			"Universitetda zamonaviy kutubxona majmuasi tantanali ravishda ochildi. Kutubxonada 100,000 dan ortiq kitob va elektron resurslar mavjud. Talabalar uchun o'qish xonalari, multimedia zonalari va gruppaviy ish joylari tashkil etilgan.",
		date: '12-yanvar, 2026',
		readTime: '5 daqiqa',
		image: '/news/news1.jpg',
		category: 'Infratuzilma',
		images: ['/news/news1.jpg', '/news/news1.jpg', '/news/news1.jpg'],
	},
	{
		id: 7,
		title: "Sport musobaqalari: universitetimiz g'olibi",
		excerpt:
			"Universitetlarraro sport musobaqalarida talabalarimiz birinchi o'rinni egalladi...",
		content:
			"Toshkent shahar universitetlari o'rtasida bo'lib o'tgan sport musobaqalarida universitetimiz jamoasi umumjamoa hisobida birinchi o'rinni qo'lga kiritdi. Futbol, basketbol va voleybol yo'nalishlarida talabalarimiz yuqori natijalarni ko'rsatdi.",
		date: '20-yanvar, 2026',
		readTime: '3 daqiqa',
		image: '/news/news1.jpg',
		category: 'Sport',
		images: ['/news/news1.jpg', '/news/news1.jpg'],
	},
	{
		id: 8,
		title: 'Startup loyihalari tanlovining yakuni',
		excerpt: "Talabalar startup loyihalari tanlovi g'oliblari e'lon qilindi...",
		content:
			"Universitetda o'tkazilgan startup loyihalari tanlovida eng yaxshi innovatsion g'oyalar aniqlanadi. G'oliblar malakali mentorlar bilan ishlash va loyihalarini amalga oshirish uchun grant mablag'lari oldi.",
		date: '15-yanvar, 2026',
		readTime: '4 daqiqa',
		image: '/news/news1.jpg',
		category: 'Innovatsiya',
		images: ['/news/news1.jpg'],
	},
]

const categories = [
	'Hammasi',
	'Muloqot',
	"Ta'lim",
	'Seminar',
	'Hamkorlik',
	'Konferensiya',
	'Infratuzilma',
	'Sport',
	'Innovatsiya',
]

function NewsListPage({
	onNewsClick,
}: {
	onNewsClick: (newsId: number) => void
}) {
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('Hammasi')
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 6

	// Filte
	const filteredNews = useMemo(() => {
		return allNews.filter(news => {
			const matchesSearch =
				news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				news.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
			const matchesCategory =
				selectedCategory === 'Hammasi' || news.category === selectedCategory
			return matchesSearch && matchesCategory
		})
	}, [searchQuery, selectedCategory])

	// Pagination logic
	const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
	const startIndex = (currentPage - 1) * itemsPerPage
	const paginatedNews = filteredNews.slice(
		startIndex,
		startIndex + itemsPerPage
	)

	return (
		<div
			className='min-h-screen'
			// style={{ backgroundImage: "url('/patternbg.png')" }}
		>
			{/* Header */}
			<div className='bg-white shadow-sm border-b'>
				<div className='max-w-7xl mx-auto px-4 py-8'>
					<motion.h1
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-4xl font-bold bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2'
					>
						Barcha Yangiliklar
					</motion.h1>
					<p className='text-gray-600'>
						Jami {filteredNews.length} ta yangilik topildi
					</p>
				</div>
			</div>

			<div className='max-w-7xl mx-auto px-4 py-8'>
				{/* Search and Filter Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className='mb-8 space-y-4'
				>
					{/* Search Bar */}
					<div className='relative'>
						<Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
						<input
							type='text'
							placeholder='Yangiliklar ichidan qidirish...'
							value={searchQuery}
							onChange={e => {
								setSearchQuery(e.target.value)
								setCurrentPage(1)
							}}
							className='w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors bg-white shadow-sm'
						/>
						{searchQuery && (
							<button
								onClick={() => setSearchQuery('')}
								className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
							>
								<X className='w-5 h-5' />
							</button>
						)}
					</div>

					{/* Category Filter */}
					<div className='flex items-center gap-3 flex-wrap'>
						<Filter className='w-5 h-5 text-gray-600' />
						{categories.map(category => (
							<motion.button
								key={category}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => {
									setSelectedCategory(category)
									setCurrentPage(1)
								}}
								className={`px-4 py-2 rounded-lg font-medium transition-all ${
									selectedCategory === category
										? 'bg-blue-600 text-white shadow-lg'
										: 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
								}`}
							>
								{category}
							</motion.button>
						))}
					</div>
				</motion.div>

				{/* News Grid */}
				<AnimatePresence mode='wait'>
					<motion.div
						key={`${selectedCategory}-${currentPage}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'
					>
						{paginatedNews.map((news, index) => (
							<motion.div
								key={news.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ y: -8 }}
								onClick={() => onNewsClick(news.id)}
								className='bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group'
							>
								<div className='relative h-48 overflow-hidden'>
									<Image
										src={news.image}
										alt={news.title}
										className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
										fill
									/>
									<div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent' />
									<div className='absolute top-4 left-4'>
										<span className='px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full'>
											{news.category}
										</span>
									</div>
								</div>

								<div className='p-6'>
									<div className='flex items-center gap-4 text-sm text-gray-500 mb-3'>
										<span className='flex items-center gap-1'>
											<Calendar className='w-4 h-4' />
											{news.date}
										</span>
										<span className='flex items-center gap-1'>
											<Clock className='w-4 h-4' />
											{news.readTime}
										</span>
									</div>
									<h3 className='font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors'>
										{news.title}
									</h3>
									<p className='text-gray-600 line-clamp-3 mb-4'>
										{news.excerpt}
									</p>
									<div className='flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all'>
										Batafsil
										<ChevronRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>

				{/* Pagination */}
				{totalPages > 1 && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className='flex justify-center items-center gap-2'
					>
						<button
							onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
							disabled={currentPage === 1}
							className='p-2 rounded-lg bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors'
						>
							<ChevronLeft className='w-5 h-5' />
						</button>

						{[...Array(totalPages)].map((_, i) => (
							<button
								key={i + 1}
								onClick={() => setCurrentPage(i + 1)}
								className={`w-10 h-10 rounded-lg font-semibold transition-all ${
									currentPage === i + 1
										? 'bg-blue-600 text-white shadow-lg scale-110'
										: 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
								}`}
							>
								{i + 1}
							</button>
						))}

						<button
							onClick={() =>
								setCurrentPage(prev => Math.min(totalPages, prev + 1))
							}
							disabled={currentPage === totalPages}
							className='p-2 rounded-lg bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors'
						>
							<ChevronRight className='w-5 h-5' />
						</button>
					</motion.div>
				)}
			</div>
		</div>
	)
}

// News Detail Page Component
function NewsDetailPage({
	newsId,
	onBack,
}: {
	newsId: number
	onBack: () => void
}) {
	const news = allNews.find(n => n.id === newsId)
	const [selectedImage, setSelectedImage] = useState<string | null>(null)

	if (!news) return null

	return (
		<div className='min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-100'>
			{/* Breadcrumb */}
			<div className='bg-white shadow-sm border-b'>
				<div className='max-w-4xl mx-auto px-4 py-4'>
					<div className='flex items-center gap-2 text-sm'>
						<button
							onClick={onBack}
							className='flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium'
						>
							<Home className='w-4 h-4' />
							Bosh sahifa
						</button>
						<ChevronRight className='w-4 h-4 text-gray-400' />
						<button
							onClick={onBack}
							className='text-blue-600 hover:text-blue-700 font-medium'
						>
							Yangiliklar
						</button>
						<ChevronRight className='w-4 h-4 text-gray-400' />
						<span className='text-gray-600 line-clamp-1'>{news.category}</span>
					</div>
				</div>
			</div>

			<div className='max-w-4xl mx-auto px-4 py-12'>
				<motion.article
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className='bg-white rounded-2xl shadow-xl overflow-hidden'
				>
					{/* Header */}
					<div className='p-8 pb-6'>
						<div className='flex items-center gap-3 mb-4'>
							<span className='px-4 py-2 bg-blue-600 text-white font-semibold rounded-full'>
								{news.category}
							</span>
							<span className='flex items-center gap-2 text-gray-600'>
								<Calendar className='w-4 h-4' />
								{news.date}
							</span>
							<span className='flex items-center gap-2 text-gray-600'>
								<Clock className='w-4 h-4' />
								{news.readTime}
							</span>
						</div>

						<h1 className='text-4xl font-bold text-gray-900 leading-tight mb-6'>
							{news.title}
						</h1>
					</div>

					{/* Main Image */}
					<div className='relative h-96 overflow-hidden'>
						<Image
							src={news.image}
							alt={news.title}
							className='w-full h-full object-cover'
							fill
						/>
						<div className='absolute inset-0 bg-linear-to-t from-black/30 to-transparent' />
					</div>

					{/* Content */}
					<div className='p-8'>
						<div className='prose prose-lg max-w-none'>
							<p className='text-gray-700 leading-relaxed text-lg'>
								{news.content}
							</p>

							<p className='text-gray-700 leading-relaxed text-lg mt-4'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>

							<p className='text-gray-700 leading-relaxed text-lg mt-4'>
								Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
								cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</div>

						{/* Image Gallery */}
						{news.images && news.images.length > 1 && (
							<div className='mt-12'>
								<h2 className='text-2xl font-bold text-gray-900 mb-6'>
									Fotogalereya
								</h2>
								<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
									{news.images.map((img, index) => (
										<motion.div
											key={index}
											whileHover={{ scale: 1.05 }}
											onClick={() => setSelectedImage(img)}
											className='relative h-48 rounded-lg overflow-hidden cursor-pointer group'
										>
											<Image
												src={img}
												alt={`Gallery ${index + 1}`}
												className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
												fill
											/>
											<div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors' />
										</motion.div>
									))}
								</div>
							</div>
						)}

						{/* Back Button */}
						<div className='mt-12 pt-8 border-t'>
							<button
								onClick={onBack}
								className='flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg group'
							>
								<ChevronLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
								Orqaga qaytish
							</button>
						</div>
					</div>
				</motion.article>
			</div>

			{/* Image Modal */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedImage(null)}
						className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer'
					>
						<motion.img
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.8 }}
							src={selectedImage}
							alt='Full size'
							className='max-w-full max-h-full object-contain rounded-lg'
							onClick={e => e.stopPropagation()}
						/>
						<button
							onClick={() => setSelectedImage(null)}
							className='absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors'
						>
							<X className='w-6 h-6 text-white' />
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

// Main App Component
export default function NewsApp() {
	const [currentView, setCurrentView] = useState('list') // 'list' or 'detail'
	const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null)

	const handleNewsClick = (newsId: number): void => {
		setSelectedNewsId(newsId)
		setCurrentView('detail')
	}

	const handleBack = () => {
		setCurrentView('list')
		setSelectedNewsId(null)
	}

	return (
		<div>
			{currentView === 'list' ? (
				<NewsListPage onNewsClick={handleNewsClick} />
			) : selectedNewsId !== null ? (
				<NewsDetailPage newsId={selectedNewsId} onBack={handleBack} />
			) : null}
		</div>
	)
}
