'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useId, useRef, useState } from 'react'

interface SlideData {
	title: string
	src: string
}

interface SlideProps {
	slide: SlideData
	index: number
	current: number
}

const Slide = ({ slide, index, current }: SlideProps) => {
	const slideRef = useRef<HTMLLIElement>(null)
	const xRef = useRef(0)
	const yRef = useRef(0)
	const frameRef = useRef<number>()

	useEffect(() => {
		const animate = () => {
			if (!slideRef.current) return
			const x = xRef.current
			const y = yRef.current
			slideRef.current.style.setProperty('--x', `${x}px`)
			slideRef.current.style.setProperty('--y', `${y}px`)
			frameRef.current = requestAnimationFrame(animate)
		}

		frameRef.current = requestAnimationFrame(animate)
		return () => {
			if (frameRef.current) {
				cancelAnimationFrame(frameRef.current)
			}
		}
	}, [])

	const handleMouseMove = (event: React.MouseEvent) => {
		const el = slideRef.current
		if (!el) return
		const r = el.getBoundingClientRect()
		xRef.current = event.clientX - (r.left + Math.floor(r.width / 2))
		yRef.current = event.clientY - (r.top + Math.floor(r.height / 2))
	}

	const handleMouseLeave = () => {
		xRef.current = 0
		yRef.current = 0
	}

	const { src, title } = slide
	const isActive = current === index

	return (
		<li
			ref={slideRef}
			className='relative shrink-0 w-64 h-64'
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				transform: isActive ? 'scale(1.1) translateY(-10px)' : 'scale(0.9)',
				transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
				opacity: isActive ? 1 : 0.6,
			}}
		>
			<div className='relative w-full h-full overflow-hidden rounded-2xl shadow-2xl'>
				{isActive && (
					<div
						className='pointer-events-none absolute inset-0 z-10 opacity-40'
						style={{
							background: `radial-gradient(circle at calc(50% + var(--x, 0px)) calc(50% + var(--y, 0px)), rgba(59, 130, 246, 0.6), transparent 60%)`,
						}}
					/>
				)}
				<Image
					className='absolute inset-0 w-full h-full object-contain bg-white p-4'
					alt={title}
					src={src}
					fill
					sizes='256px'
				/>
			</div>
			{isActive && (
				<div className='absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap'>
					<p className='text-sm font-semibold text-gray-800 text-center'>
						{title}
					</p>
				</div>
			)}
		</li>
	)
}

interface CarouselControlProps {
	type: 'previous' | 'next'
	handleClick: () => void
}

const CarouselControl = ({ type, handleClick }: CarouselControlProps) => {
	return (
		<button
			className='relative w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all shadow-lg z-10'
			onClick={handleClick}
			aria-label={type === 'previous' ? 'Oldingi' : 'Keyingi'}
		>
			{type === 'previous' ? (
				<ChevronLeft className='w-6 h-6 text-gray-700' />
			) : (
				<ChevronRight className='w-6 h-6 text-gray-700' />
			)}
		</button>
	)
}

interface CarouselProps {
	slides: SlideData[]
}

export function Carousel({ slides }: CarouselProps) {
	const [current, setCurrent] = useState(0)
	const id = useId()

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent(prev => (prev + 1) % slides.length)
		}, 3000)

		return () => clearInterval(interval)
	}, [slides.length])

	const handlePreviousClick = () => {
		setCurrent(prev => (prev - 1 + slides.length) % slides.length)
	}

	const handleNextClick = () => {
		setCurrent(prev => (prev + 1) % slides.length)
	}

	const getVisibleSlides = () => {
		const visible = []
		for (let i = -2; i <= 2; i++) {
			const index = (current + i + slides.length) % slides.length
			visible.push({ slide: slides[index], index, offset: i })
		}
		return visible
	}

	return (
		<div className='relative w-full overflow-hidden py-16'>
			<div className='flex items-center justify-center gap-8'>
				<CarouselControl type='previous' handleClick={handlePreviousClick} />

				<div className='relative h-80 flex items-center justify-center overflow-visible'>
					<ul className='flex items-center justify-center gap-8'>
						{getVisibleSlides().map(({ slide, index, offset }) => (
							<div
								key={`${id}-${index}`}
								style={{
									transform: `translateX(${offset * 280}px)`,
									transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
								}}
							>
								<Slide slide={slide} index={index} current={current} />
							</div>
						))}
					</ul>
				</div>

				<CarouselControl type='next' handleClick={handleNextClick} />
			</div>

			<div className='flex justify-center gap-2 mt-8'>
				{slides.map((_, index) => (
					<button
						key={`dot-${index}`}
						onClick={() => setCurrent(index)}
						className={`w-2 h-2 rounded-full transition-all ${
							current === index
								? 'bg-blue-600 w-8'
								: 'bg-gray-300 hover:bg-gray-400'
						}`}
						aria-label={`Slayd ${index + 1}`}
					/>
				))}
			</div>
		</div>
	)
}
