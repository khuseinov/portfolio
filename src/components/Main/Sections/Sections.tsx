import { FC, ReactNode } from 'react'
import { Container } from './styled'

type SecondTitleProps = {
	name: string
	children?: ReactNode
}

const SecondTitle: FC<SecondTitleProps> = ({ name, children }) => {
	return (
		<Container className='SectionTitle'>
			{name}
			{children}
		</Container>
	)
}

export default SecondTitle
