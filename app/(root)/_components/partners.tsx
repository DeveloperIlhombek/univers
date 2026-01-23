import { InfiniteScrollCarousel } from '@/components/ui/carousel'

export function Partners() {
	const slideData = [
		{
			title: 'Toshkent Davlat Iqtisodiyot Universiteti',
			src: '/partners/1_21.png',
		},
		{
			title: "O'zbekiston Milliy Universiteti",
			src: '/partners/6_18.png',
		},
		{
			title: 'Toshkent Axborot Texnologiyalari Universiteti',
			src: '/partners/7_12.png',
		},
		{
			title: 'Samarqand Davlat Universiteti',
			src: '/partners/8_11.png',
		},
		{
			title: 'Buxoro Davlat Universiteti',
			src: '/partners/9_12.png',
		},
		{
			title: 'Urganch Davlat Universiteti',
			src: '/partners/21.png',
		},
		{
			title: "Farg'ona Davlat Universiteti",
			src: '/partners/16_1.png',
		},
		{
			title: 'Andijon Davlat Universiteti',
			src: '/partners/22.jpg',
		},
		{
			title: 'Namangan Davlat Universiteti',
			src: '/partners/30.jpg',
		},
		{
			title: "Qo'qon Davlat Pedagogika Instituti",
			src: '/partners/15_4.png',
		},
		{
			title: 'Termiz Davlat Universiteti',
			src: '/partners/23.png',
		},
		{
			title: 'Nukus Davlat Pedagogika Instituti',
			src: '/partners/24.png',
		},
		{
			title: 'Westminster International University',
			src: '/partners/25.png',
		},
	]

	return (
		<section className='py-16 w-full bg-transparent'>
			<div className='max-w-7xl mx-auto px-4 mb-8'>
				<h2 className='text-4xl font-bold text-center text-gray-900 mb-4'>
					Hamkor Universitetlar
				</h2>
				<p className='text-center text-gray-600 max-w-2xl mx-auto'>
					Biz Ozbekistonning eng yetakchi oliy talim muassasalari bilan
					hamkorlik qilamiz
				</p>
			</div>
			<InfiniteScrollCarousel slides={slideData} speed={10} />
		</section>
	)
}
