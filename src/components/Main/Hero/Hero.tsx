import { FC } from 'react'
import {
	Button,
	Container,
	Description,
	Prefix,
	PrimaryTitle,
	SecondaryTitle,
} from './styled'

const Hero: FC = () => {
	return (
		<Container>
			<Prefix>
				<div>Hi, my name is</div>
			</Prefix>

			<PrimaryTitle>
				<h1>Rustam Khuseinov.</h1>
			</PrimaryTitle>

			<SecondaryTitle>
				<h2>I am a front-end developer.</h2>
			</SecondaryTitle>

			<Description>
				<div>
					I specialize in creating web applications that not only have high
					performance and clean code, but also provide an exceptional user
					experience.
				</div>
			</Description>
			<Button href='#contact'>Contact me</Button>
		</Container>
	)
}

export default Hero
