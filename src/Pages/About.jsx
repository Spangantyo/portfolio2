import { ButtonsF, ButtonsB } from '@/Components/Buttons'
import React from 'react'

export default function About() {
	return (
		<div className='relative w-full h-full px-5 md:px-14 lg:px-56 mt-96 md:mt-0 justify-center items-center flex flex-row gap-5'>
			<div className='flex flex-col w-full h-screen justify-center items-center'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-bold text-dark'>About Me</h2>
					<div className='w-40 h-1 bg-purple-600 mx-auto mt-4' />
				</div>
				<div className='flex flex-col md:flex-row gap-7 items-center'>
					<div className='w-full md:w-1/2 mb-8 md:mb-0'>
						<div className='bg-gray-100 p-10 flex justify-center rounded-lg shadow-sm'>
							<img
								src='/src/assets/img/my-profile.png'
								alt='My Profile'
								className='w-96 h-96 object-cover rounded-full'
							/>
						</div>
					</div>
					<div className='w-full md:w-1/2'>
						<h3 className='text-2xl font-semibold mb-4 text-dark'>Who am I?</h3>
						<p className='text-gray-600 mb-4'>
							I'm a passionate web developer with over 5 years of experience creating
							modern and responsive websites. I specialize in front-end development
							and have a strong eye for design.
						</p>
						<p className='text-gray-600 mb-6'>
							My goal is to build digital experiences that are not only visually
							appealing but also functional and user-friendly. I love solving complex
							problems and turning ideas into reality.
						</p>
						<div className='grid grid-cols-2 gap-4'>
							<div>
								<p className='font-medium text-dark'>Name:</p>
								<p className='text-gray-600'>Jenaissante</p>
							</div>
							<div>
								<p className='font-medium text-dark'>Email:</p>
								<p className='text-gray-600'>jenaissante13@gmail.com</p>
							</div>
							<div>
								<p className='font-medium text-dark'>Location:</p>
								<p className='text-gray-600'>California</p>
							</div>
							<div>
								<p className='font-medium text-dark'>Availability:</p>
								<p className='text-gray-600'>Available for freelance</p>
							</div>
						</div>
						<div className='mt-8 flex justify-start gap-5'>
							<ButtonsF
								label='Download CV'
								link='#'
								className='py-3 px-14 rounded-2xl'
							/>
							<ButtonsB
								label='Download CV'
								link='#'
								className='py-3 px-14 rounded-2xl'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
