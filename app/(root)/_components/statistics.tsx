'use client'

import { motion } from 'framer-motion'
import { Calendar, GraduationCap, MapPin, Users } from 'lucide-react'
import StatisticsCard from './statistics-card'
const STATISTICS_DATA = [
	{
		title: 'Tashkil topgan',
		value: '2016',
		hoverColor: 'hsl(199, 75%, 46%)',
		hoverRightColor: 'hsl(193, 90%, 66%)',
		icon: <Calendar size={24} />,
		dotcolor: 'hsl(199, 75%, 46%)',
	},
	{
		title: 'Talabalar',
		value: '6325+',
		hoverColor: 'hsl(160, 84%, 39%)',
		hoverRightColor: 'hsl(160, 72%, 52%)',
		icon: <GraduationCap size={24} />,
		dotcolor: 'hsl(160, 84%, 39%)',
	},
	{
		title: 'Ilmiy salohiyat',
		value: '58+',
		hoverColor: 'hsl(38, 92%, 50%)',
		hoverRightColor: 'hsl(43, 96%, 56%)',
		icon: <MapPin size={24} />,
		dotcolor: 'hsl(38, 92%, 50%)',
	},
	{
		title: "O'qituvchilar",
		value: '230+',
		hoverColor: 'hsl(84, 81%, 44%)',
		hoverRightColor: 'hsl(84, 85%, 55%)',
		icon: <Users size={24} />,
		dotcolor: 'hsl(84, 81%, 44%)',
	},
]
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

const childVariants = {
	hidden: { opacity: 0, y: 20, rotateX: -10 },
	visible: {
		opacity: 1,
		y: 0,
		rotateX: 0,
		transition: {
			type: 'spring' as const,
			stiffness: 100,
			damping: 12,
		},
	},
}
function Statistics() {
	return (
		<div className='relative py-10 px-4'>
			<div className='max-w-7xl mx-auto'>
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
						Universitet - ilm, izlanish, kashf etish, innovatsiyalar joriy etish
						maskani
					</motion.h1>
				</motion.div>
				{/* Statistics Section */}
				<motion.div
					className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 mb-12 sm:mb-16'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
				>
					{STATISTICS_DATA.map((stat, index) => (
						<motion.div key={index} variants={childVariants}>
							<StatisticsCard
								title={stat.title}
								value={stat.value}
								hoverColor={stat.hoverColor}
								hoverRightColor={stat.hoverRightColor}
								icon={stat.icon}
								index={index}
								dotcolor={stat.dotcolor}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	)
}

export default Statistics
