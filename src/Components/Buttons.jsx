import React from 'react'

export const ButtonsF = ({ link, label, className = '' }) => {
	return (
		<a
			href={link}
			className={`px-6 py-2 min-w-[120px] text-center text-white bg-purple-600 border border-purple-600 rounded transition-all duration-300 active:text-purple-500 hover:bg-transparent hover:text-purple-600 focus:outline-none focus:ring ${className}`}
		>
			{label}
		</a>
	)
}

export const ButtonsB = ({ link, label, className = '' }) => {
	return (
		<a
			href={link}
			className={`px-6 py-2 min-w-[120px] text-center bg-transparent text-purple-600 border border-purple-600 rounded transition-all duration-300 active:text-purple-500 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring ${className}`}
		>
			{label}
		</a>
	)
}
