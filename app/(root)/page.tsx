import Image from 'next/image'

export default function Home() {
	return (
		<div
			className='relative container max-w-8xl mx-auto h-[80vh]'
			style={{ backgroundImage: "url('/patternbg.png')" }}
		>
			{/* Background image */}
			<Image
				src='/hero_img.jpg'
				alt='Background'
				fill
				priority
				className='object-contain'
			/>
			<div className='absolute inset-0 bg-black/20' />
		</div>
	)
}
