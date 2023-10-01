import { FC } from 'react'
import { Button, Container, Description, Overline, Title } from './styled'

const Contact: FC = () => {
	return (
		<Container id='contact'>
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
