import { FC } from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Experience from './Experience/Experience'
import Hero from './Hero/Hero'
import TechStacks from './TechStacks/TechStacks'
import { Container } from './styled'

const Main: FC = () => {
	return (
		<Container>
			<Hero />
			<About />
			<Experience />
			<TechStacks />
			{/* <Projects /> */}
			<Contact />
		</Container>
	)
}

export default Main
