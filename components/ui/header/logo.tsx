'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	return (
		<div className='px-12 py-4'>
			<Link href='#' className='relative block w-24 h-24'>
				{/* Glow layer */}
				<motion.div
					className='absolute inset-0 pointer-events-none'
					initial={{ scale: 1, opacity: 0 }}
					animate={{
						scale: [1, 1.25],
						opacity: [0, 1, 0],	
						// filter: ['blur(1px)', 'blur(1px)', 'blur(1px)'],
					}}
					transition={{
						duration: 1,
						times: [0, 0.7, 1],
						repeat: Infinity,
						repeatDelay: 4,
						ease: 'easeOut',
					}}
				>
					<Image src='/logo.png' alt='logo' width={100} height={100} />
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
		</div>
	)
}

export default Logo
