'use client'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi' // contoh icon

export const LinkA = ({ activeSection, url, label, icon: Icon, className }) => {
	return (
		<a
			href={url}
			className={`flex items-center gap-1 hover:text-purple-600 transition ${
				activeSection === url ? 'text-purple-600' : ''
			}`}
		>
			<div className='flex flex-col justify-center items-center'>
				{Icon && <Icon className={className} />}
				<p className='text-sm'>{label}</p>
			</div>
		</a>
	)
}
