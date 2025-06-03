import Home from '@/Pages/Home'
import About from '@/Pages/About'
import Portfolio from '@/Pages/Portfolio'
import Contact from '@/Pages/Contact'
import { SectionsPages } from '@/Components/SectionsPages'
import Navbars from '@/Components/Navbar'

function App() {
	return (
		<div className='scroll-smooth'>
			<Navbars></Navbars>
			{/* Home */}
			<SectionsPages id='home'>
				<Home />
			</SectionsPages>
			{/* Close Home */}

			{/* About */}
			<SectionsPages id='about'>
				<About />
			</SectionsPages>
			{/* Close About */}

			{/* Portfolio */}
			<SectionsPages id='portfolio'>
				<Portfolio />
			</SectionsPages>
			{/* Close Portfolio */}

			{/* Contact */}
			<SectionsPages id='contact'>
				<Contact />
			</SectionsPages>
			{/* Close Contact */}
		</div>
	)
}

export default App
