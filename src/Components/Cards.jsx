import React from 'react'
import { FiMonitor } from 'react-icons/fi' // kamu bisa ganti dengan ikon lain

export const Cards1 = ({
	className = '',
	title = 'Project Title',
	description = 'Project description goes here.',
	link = '#',
	tags = ['HTML'],
	Icon = FiMonitor
}) => {
	const UsedIcon = Icon || FiMonitor
	return (
		<div
			className={`bg-white dark:bg-slate-800 rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group ${className}`}
		>
			<div className='relative'>
				<div className='h-56 bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center'>
					<UsedIcon className='w-20 h-20 text-white' />
				</div>

				<div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
					<a
						href={link}
						className='bg-white text-purple-600 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition'
					>
						View Project
					</a>
				</div>
			</div>

			<div className='p-6'>
				<h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
					{title}
				</h3>
				<p className='text-gray-600 dark:text-gray-300 mb-4'>{description}</p>

				<div className='flex flex-wrap gap-2'>
					{tags.map((tag, idx) => (
						<span
							key={idx}
							className='bg-purple-100 flex items-center justify-center text-purple-800 text-xs px-3 py-1 rounded-full dark:bg-purple-900 dark:text-purple-100'
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	)
}
