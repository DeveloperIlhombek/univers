import UniversityFooter from './_components/footer'
import HeroCarousel from './_components/hero'
import NewsSection from './_components/news'
import { Partners } from './_components/partners'
import Social from './_components/social'
import Statistics from './_components/statistics'

function Page() {
	return (
		<div className='relative'>
			<HeroCarousel />
			<NewsSection />
			<Statistics />
			<Partners />
			<Social />
			<UniversityFooter />
		</div>
	)
}

export default Page
