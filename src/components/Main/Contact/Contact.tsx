import { FC } from 'react'
import { Button, Container, Description, Overline, Title } from './styled'

const contactAnimation = {
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

const Contact: FC = () => {
	return (
		<Container
			id='contact'
			variants={contactAnimation}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			custom={1}
		>
			<Overline>What's Next?</Overline>
			<Title>Contact me</Title>
			<Description>
				If you have any questions or just want to say hello, please contact me.
				I am always ready to answer as quickly as possible.
			</Description>
			<Button href='mailto:rustamjon.khuseinov@gmail.com'>
				Send a message
			</Button>
		</Container>
	)
}

export default Contact
