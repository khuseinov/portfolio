import { FC } from 'react'
import SecondTitle from '../Sections/Sections'
import {
	Container,
	Content,
	Image,
	PrimaryDescription,
	SecondDescription,
	UnderlinedReference,
} from './styled'

import photo from '../../../assets/images/picture.webp'

const About: FC = () => {
	return (
		<Container id='about'>
			<SecondTitle name='About me' />
			<Content>
				<div>
					<PrimaryDescription>
						Hey! My name is Rustam Khuseinov, I'm a front-end developer from
						{'  '}
						<UnderlinedReference href=''>Kazan, Russia</UnderlinedReference>
					</PrimaryDescription>

					<SecondDescription>
						My passion for IT and programming started in school and I enjoy
						creating creative and interactive user interfaces. My goal is to
						create products that combine functionality and visual appeal. It is
						important to me that users not only easily use the products I
						develop, but also enjoy the process.
					</SecondDescription>
				</div>

				<Image>
					<div>
						<div>
							<img src={photo} alt='My photo' />
						</div>
					</div>
				</Image>
			</Content>
		</Container>
	)
}

export default About
