import { FC, useState } from 'react'
import { GlobalStyles } from './GlobalStyle'
import AsideLeft from './components/AsideLeft/AsideLeft'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Loader } from './components/Loader/Loader'
import Main from './components/Main/Main'

const App: FC = () => {
	const [loading, setLoading] = useState(true)

	if (document.location.pathname !== '/') {
		document.location.pathname = '/'
	}
	return (
		<div>
			{loading ? (
				<Loader completeHandler={(): void => setLoading(false)} />
			) : (
				<>
					<AsideLeft />
					<Header />
					<Main />
					<Footer />
				</>
			)}
			<GlobalStyles />
		</div>
	)
}

export default App
