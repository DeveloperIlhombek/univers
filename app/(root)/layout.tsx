import Navbar from './_components/navbar'

function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='container max-w-8xl mx-auto'>
			<Navbar />
			<div className='absolute z-20 container border-2'></div>
			{children}
		</div>
	)
}

export default Layout
