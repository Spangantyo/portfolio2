'use client'
import { useState, useEffect } from 'react'
import { FiHome, FiInfo, FiBriefcase, FiMail } from 'react-icons/fi'
import { LinkA } from '@/Components/Navbar/LinkA'
import { ButtonsF } from '@/Components/Buttons'

export default function Navbar() {
	const [activeSection, setActiveSection] = useState('#home')
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const sections = ['#home', '#about', '#portfolio', '#contact']

		const handleScroll = () => {
			let currentSection = '#home'
			const scrollPos = window.scrollY + 100

			sections.forEach(section => {
				const element = document.querySelector(section)
				if (element && element.offsetTop <= scrollPos) {
					currentSection = section
				}
			})

			setActiveSection(currentSection)
			// Navbar berwarna jika bukan di #home
			setIsScrolled(currentSection !== '#home')
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			<div
				className={`w-full h-20 text-slate-500 font-semibold text-lg z-50 fixed top-0  transition ${
					isScrolled
						? 'transition-all duration-500 ease-in-out bg-white border-b-slate-200 shadow-sm'
						: 'bg-bg-white/40 backdrop-blur-lg'
				}`}
			>
				<div className='flex w-full h-full px-5 md:px-14 lg:px-56 flex-row justify-center gap-2'>
					<div className='flex w-full h-full justify-start items-center gap-3'>
						<h1 className='px-4 py-2 rounded-full bg-purple-600 text-white'>P</h1>
						<a href='' className='text-slate-800 dark:text-slate-100'>
							PortfolioKu
						</a>
					</div>
					<div className='w-full h-full justify-center hidden md:flex items-center gap-6'>
						<LinkA activeSection={activeSection} url={'#home'} label={'Home'} />
						<LinkA activeSection={activeSection} url={'#about'} label={'About'} />
						<LinkA
							activeSection={activeSection}
							url={'#portfolio'}
							label={'Portfolio'}
						/>
						<LinkA activeSection={activeSection} url={'#contact'} label={'Contact'} />
					</div>
					<div className='flex w-full h-full justify-end items-center gap-6'>
						<ButtonsF label='Explorer' link='#' />
					</div>
				</div>
			</div>
			<div
				className={`w-full h-20 border-t-2 text-slate-500 font-semibold text-lg z-50 fixed bottom-0 block md:hidden transition bg-white`}
			>
				<div className='flex w-full h-full px-5 md:px-28 flex-row justify-center'>
					<div className='flex w-full h-full justify-center items-center gap-20'>
						<LinkA
							activeSection={activeSection}
							url='#home'
							icon={FiHome}
							className='text-2xl'
							label={'Home'}
						/>
						<LinkA
							activeSection={activeSection}
							url='#about'
							icon={FiInfo}
							className='text-2xl'
							label={'About'}
						/>
						<LinkA
							activeSection={activeSection}
							url='#portfolio'
							icon={FiBriefcase}
							className='text-2xl'
							label={'Portfolio'}
						/>
						<LinkA
							activeSection={activeSection}
							url='#contact'
							icon={FiMail}
							className='text-2xl'
							label={'Contact'}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
