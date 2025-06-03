import React from 'react'
import { Cards1 } from '../Components/Cards'
import { FiCode, FiImage } from 'react-icons/fi'

export default function Portfolio() {
	return (
		<>
			<div className='relative w-full h-full px-5 md:px-14 lg:px-56 mt-96 md:mt-0 flex flex-row gap-5 overflow-hidden'>
				<div className='flex flex-col justify-center items-center w-full h-full'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl font-bold text-dark'>My Projects</h2>
						<div className='w-56 h-1 bg-purple-600 mx-auto mt-4' />
						<p className='text-gray-600 mt-4 max-w-2xl mx-auto'>
							Here are some of my recent projects. Each project represents my skills
							and dedication to creating exceptional web experiences.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						<Cards1
							title='UI Design'
							description='A modern UI concept for dashboard.'
							tags={['Figma', 'Design']}
							link='https://example.com/ui-design'
						/>
						<Cards1
							title='Backend API'
							description='REST API built with Node.js and Express.'
							tags={['Node.js', 'Express', 'MongoDB']}
						/>
						<Cards1
							title='Backend API'
							description='REST API built with Node.js and Express.'
							tags={['Node.js', 'Express', 'MongoDB']}
						/>
					</div>
					<div className='text-center mt-12'>
						<a
							href='#'
							className='bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-secondary transition'
						>
							View All Projects
						</a>
					</div>
				</div>
			</div>
		</>
	)
}
