import { FC } from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Hero from './Hero/Hero'
import Projects from './Projects/Projects'
import TechStacks from './TechStacks/TechStacks'
import { Container } from './styled'

const Main: FC = () => {
	return (
		<Container>
			<Hero />
			<About />
			<TechStacks />
			<Projects />
			<Contact />
		</Container>
	)
}

export default Main
