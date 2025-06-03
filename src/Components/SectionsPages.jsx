import React from 'react'

export const SectionsPages = ({ children, className = '', id = '' }) => {
	return (
		<div id={id} className={`w-full flex justify-center items-center h-screen ${className}`}>
			{children}
		</div>
	)
}
