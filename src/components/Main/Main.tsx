import { FC } from 'react'
import About from './About/About'
import Hero from './Hero/Hero'
import { Container } from './styled'

const Main: FC = () => {
	return (
		<Container>
			<Hero />
			<About />
		</Container>
	)
}

export default Main
