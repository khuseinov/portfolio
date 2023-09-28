import { FC } from 'react'
import About from './About/About'
import Hero from './Hero/Hero'
import TechStacks from './TechStacks/TechStacks'
import { Container } from './styled'

const Main: FC = () => {
	return (
		<Container>
			<Hero />
			<About />
			<TechStacks />
		</Container>
	)
}

export default Main
