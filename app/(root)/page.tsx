import HeroCarousel from './_components/hero'
import NewsSection from './_components/news'
import Social from './_components/social'
import Statistics from './_components/statistics'

function Page() {
	return (
		<div
			className='relative'
			// style={{ backgroundImage: "url('/patternbg.png')" }}
		>
			<HeroCarousel />
			<NewsSection />
			<Statistics />
			<Social />
		</div>
	)
}

export default Page
