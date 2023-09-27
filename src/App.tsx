import { FC } from 'react'
import { GlobalStyles } from './GlobalStyle'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

const App: FC = () => {
	return (
		<div>
			<Header />
			<Main />
			<Footer />
			<GlobalStyles />
		</div>
	)
}

export default App
