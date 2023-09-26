import { FC } from 'react'
import { GlobalStyles } from './Global'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

const App: FC = () => {
	return (
		<div>
			<Header />
			<Main />
			<Footer />
			App
			<GlobalStyles />
		</div>
	)
}

export default App
