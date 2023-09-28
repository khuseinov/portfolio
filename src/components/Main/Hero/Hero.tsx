import { FC } from 'react'
import {
	Container,
	Description,
	OpenResume,
	Prefix,
	PrimaryTitle,
	SecondTitle,
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

			<SecondTitle>
				<h2>I am a front-end developer.</h2>
			</SecondTitle>

			<Description>
				<div>
					I’m specialized in building Web application. I also love designing
					them to create vibrant UI experiences. In the past few month I focused
					on personal project to upgrade my skills and be more efficiant.
				</div>
			</Description>
			<OpenResume onClick={() => window.open('/public/resume.pdf', '_blank')}>
				Resume
			</OpenResume>
		</Container>
	)
}

export default Hero
