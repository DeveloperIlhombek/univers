'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	return (
		<Link
			href='#'
			className='relative w-24 h-24 flex items-center justify-center '
		>
			{/* Glow layer */}
			<motion.div
				className='absolute inset-0 flex items-center justify-center pointer-events-none'
				initial={{ scale: 1, opacity: 0 }}
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0, 0.5, 0],
				}}
				transition={{
					duration: 1.2,
					repeat: Infinity,
					repeatDelay: 3,
					ease: 'easeOut',
				}}
			>
				<Image src='/logo.png' alt='Glow' width={100} height={100} />
			</motion.div>

			{/* Main logo */}
			<Image
				src='/logo.png'
				alt='Logo'
				width={100}
				height={100}
				className='relative z-10'
			/>
		</Link>
	)
}

export default Logo
