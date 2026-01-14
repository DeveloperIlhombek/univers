import HeroCarousel from './_components/hero'
import NewsSection from './_components/news'

function Page() {
	return (
		<div
			className='relative'
			// style={{ backgroundImage: "url('/patternbg.png')" }}
		>
			<HeroCarousel />
			<NewsSection />
		</div>
	)
}

export default Page
