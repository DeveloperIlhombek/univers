'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { useState } from 'react'

export default function SearchBar() {
	const [isOpen, setIsOpen] = useState(false)
	const [query, setQuery] = useState('')

	return (
		<div className='relative'>
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => setIsOpen(!isOpen)}
				className='p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-colors border border-white/20'
			>
				<Search className='w-5 h-5' />
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setIsOpen(false)}
							className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40'
						/>

						{/* Search Modal */}
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							className='fixed top-24 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4'
						>
							<div className='bg-white rounded-2xl shadow-2xl overflow-hidden'>
								<div className='flex items-center gap-4 p-6 border-b'>
									<Search className='w-6 h-6 text-gray-400' />
									<Input
										type='text'
										placeholder='Qidirish...'
										value={query}
										onChange={e => setQuery(e.target.value)}
										autoFocus
										className='flex-1 text-lg outline-none text-black'
									/>
									<Button
										variant={'outline'}
										onClick={() => setIsOpen(false)}
										className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
									>
										<X className='w-5 h-5 text-gray-500' />
									</Button>
								</div>
								{query && (
									<div className='p-6'>
										<p className='text-gray-500'>Natijalar: {query}</p>
									</div>
								)}
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	)
}
