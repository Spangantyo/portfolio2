import React from 'react'
import { ButtonsB, ButtonsF } from '@/Components/Buttons'

export default function Home() {
	return (
		<>
			<div className='relative w-full h-full px-5 md:px-14 lg:px-56 flex flex-row gap-5 overflow-hidden'>
				{/* Background Blur Layer */}
				<div className='absolute inset-0 bg-Imglight bg-cover bg-center bg-fixed opacity-30 z-0'></div>

				{/* Konten utama di atas background */}
				<div className='relative w-full h-full flex flex-col justify-center items-center z-10'>
					<h2 className='text-xl font-bold text-slate-600'>WELCOME TO</h2>
					<h1 className='text-4xl md:text-5xl font-bold text-purple-600 mb-4'>
						Website Portfolio
					</h1>
					<p className='text-xl w-2/3 text-center text-gray-600 mb-6'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis
						accusantium doloremque soluta excepturi sunt in molestias eum similique
						impedit!
					</p>
					<div className='w-full flex flex-row justify-center items-center gap-3'>
						<ButtonsF label='Explorer' link='#about' className='py-3 px-14' />
						<ButtonsB
							label='Contact'
							link='https://wa.me/6287797929789'
							className='py-3 px-14'
						/>
					</div>
				</div>
			</div>
		</>
	)
}
