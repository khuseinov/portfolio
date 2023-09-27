import { FC } from 'react'
import { GlobalStyles } from './Global'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './components/Main/About/About'
import Hero from './components/Main/Hero/Hero'
import { Main } from './components/Main/styled'

const App: FC = () => {
	return (
		<div>
			<Header />
			<Main>
				<Hero />
				<About />
			</Main>
			<Footer />
			<GlobalStyles />
		</div>
	)
}

export default App
