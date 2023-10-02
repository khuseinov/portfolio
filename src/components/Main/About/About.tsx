import { FC } from 'react'
import SecondTitle from '../Sections/Sections'
import {
	Container,
	Content,
	Image,
	PrimaryDescription,
	Text,
	UnderlinedReference,
} from './styled'

import { motion } from 'framer-motion'
import photo from '../../../assets/images/picture.webp'
const textAnimation = {
	hidden: {
		y: 0,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { ease: 'easeInOut', delay: custom * 0.1, duration: 1 },
	}),
}

const About: FC = () => {
	return (
		<Container
			id='about'
			as={motion.section}
			variants={textAnimation}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			custom={1}
		>
			<SecondTitle name='About me' />
			<Content>
				<Text>
					<PrimaryDescription>
						Hey! My name is Rustam Khuseinov, I'm a front-end developer from
						{'  '}
						<UnderlinedReference href=''>Kazan, Russia</UnderlinedReference>
					</PrimaryDescription>

					<PrimaryDescription>
						My passion for IT and programming started in school and I enjoy
						creating creative and interactive user interfaces. My goal is to
						create products that combine functionality and visual appeal. It is
						important to me that users not only easily use the products I
						develop, but also enjoy the process.
					</PrimaryDescription>
				</Text>

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
