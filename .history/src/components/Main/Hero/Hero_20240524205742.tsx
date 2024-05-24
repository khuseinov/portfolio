import { FC } from 'react'
import {
	Container,
	Description,
	Prefix,
	PrimaryTitle,
	SecondTitle,
} from './styled'

import { motion } from 'framer-motion'
const textAnimation = {
	hidden: {
		y: 0,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.3, duration: 1 },
	}),
}

const Hero: FC = () => {
	return (
		<Container
			as={motion.section}
			variants={textAnimation}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
		>
			<Prefix as={motion.div} custom={1} variants={textAnimation}>
				<div>Hi, my name is</div>
			</Prefix>

			<PrimaryTitle as={motion.div} custom={2} variants={textAnimation}>
				<h1>Rustam Khuseinov.</h1>
			</PrimaryTitle>

			<SecondTitle as={motion.div} custom={3} variants={textAnimation}>
				<h2>I am a front-end developer.</h2>
			</SecondTitle>

			<Description as={motion.div} custom={4} variants={textAnimation}>
				<div>
					I’m specialized in building Web application. I also love designing
					them to create vibrant UI experiences. In the past few month I focused
					on personal project to upgrade my skills and be more efficiant.
				</div>
			</Description>
			{/* <OpenResume
				as={motion.a}
				custom={4}
				variants={textAnimation}
				href='myResume.pdf'
				// download='myResume.pdf'
				target='_blank'
			>
				Resume
			</OpenResume> */}
		</Container>
	)
}

export default Hero
