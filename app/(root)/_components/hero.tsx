'use client'

import { AnimatePresence, motion, Variants } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const images = [
	'/hero_img.jpg',
	'/hero_img2.jpg',
	'/hero_img3.jpg',
	'/hero_img4.jpg',
	'/hero_img5.jpg',
]

export default function HeroCarousel() {
	const [current, setCurrent] = useState(0)
	const [direction, setDirection] = useState(0)
	const handleNext = () => {
		setDirection(1)
		setCurrent(prev => (prev + 1) % images.length)
	}
	useEffect(() => {
		const timer = setInterval(() => {
			handleNext()
		}, 5000)

		return () => clearInterval(timer)
	}, [current])

	const handlePrev = () => {
		setDirection(-1)
		setCurrent(prev => (prev - 1 + images.length) % images.length)
	}

	const variants: Variants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (direction: number) => ({
			x: direction > 0 ? -1000 : 1000,
			opacity: 0,
		}),
	}

	return (
		<div
			className='relative container max-w-8xl mx-auto h-[80vh] overflow-hidden'
			style={{ backgroundImage: "url('/patternbg.png')" }}
		>
			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					key={current}
					custom={direction}
					variants={variants}
					initial='enter'
					animate='center'
					exit='exit'
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					className='absolute inset-0'
				>
					<Image
						src={images[current]}
						alt={`Hero ${current + 1}`}
						className='w-full h-full object-contain'
						fill
						priority
					/>
				</motion.div>
			</AnimatePresence>

			{/* Dark overlay */}
			<div className='absolute inset-0 bg-black/20' />

			{/* Navigation buttons */}
			<button
				onClick={handlePrev}
				className='absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full transition-all shadow-lg'
				aria-label='Previous slide'
			>
				<ChevronLeft className='w-6 h-6 text-gray-800' />
			</button>

			<button
				onClick={handleNext}
				className='absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full transition-all shadow-lg'
				aria-label='Next slide'
			>
				<ChevronRight className='w-6 h-6 text-gray-800' />
			</button>

			{/* Dots indicator */}
			<div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2'>
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => {
							setDirection(index > current ? 1 : -1)
							setCurrent(index)
						}}
						className={`w-3 h-3 rounded-full transition-all ${
							index === current ? 'bg-white w-8' : 'bg-white/50'
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	)
}
