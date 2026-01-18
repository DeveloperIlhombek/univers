import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StatisticsCardProps {
	title: string
	value: string
	hoverColor: string
	hoverRightColor: string
	icon: ReactNode
	index: number
	dotcolor: string
}

const StatisticsCard = ({
	title,
	value,
	hoverColor,
	hoverRightColor,
	index,
	dotcolor,
}: StatisticsCardProps) => {
	return (
		<motion.div
			className='relative overflow-hidden rounded-2xl bg-card border border-border p-6 cursor-pointer group'
			whileHover={{ scale: 1.02, y: -4 }}
			transition={{ type: 'spring', stiffness: 300, damping: 20 }}
		>
			{/* Gradient overlay on hover */}
			<motion.div
				className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
				style={{
					background: `linear-gradient(135deg, ${hoverColor}, ${hoverRightColor})`,
				}}
			/>

			{/* Content */}
			<div className='relative z-10'>
				<motion.div
					className='absolute top-0 right-0 w-3 sm:w-4 h-3 sm:h-4  rounded-full transition-colors duration-300'
					style={{ background: `${dotcolor}` }}
					whileHover={{ rotate: [0, -10, 10, 0] }}
					transition={{ duration: 0.5 }}
				/>

				<motion.h3
					className='text-4xl text-center md:text-5xl font-bold text-foreground group-hover:text-white transition-colors duration-300 mb-2'
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.1 }}
				>
					{value}
				</motion.h3>

				<p className='text-[14px] text-pretty text-start sm:text-center text-muted-foreground group-hover:text-white/80 transition-colors duration-300 leading-relaxed'>
					{title}
				</p>
			</div>

			{/* Decorative element */}
			<div className='absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-secondary/50 group-hover:bg-white/10 transition-colors duration-300' />
		</motion.div>
	)
}

export default StatisticsCard
