import Image from 'next/image'

interface Slide {
	src: string
	title: string
}

interface CarouselProps {
	slides: Slide[]
	speed?: number
}

export function InfiniteScrollCarousel({ slides, speed = 30 }: CarouselProps) {
	const duplicatedSlides = [...slides, ...slides]

	return (
		<div className='w-full overflow-hidden py-8'>
			<style>
				{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll ${speed}s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
			</style>

			<div className='flex gap-12 animate-scroll'>
				{duplicatedSlides.map((slide, index) => (
					<div
						key={`${slide.title}-${index}`}
						className='shrink-0 w-48 h-32 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6'
					>
						<div className='relative w-full h-full flex items-center justify-center'>
							<Image
								src={slide.src}
								alt={slide.title}
								className='max-w-full max-h-full object-contain'
								fill
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
