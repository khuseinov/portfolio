import { FC } from 'react'
import SecondTitle from '../Sections/Sections'
import ProjectCard from './ProjectCard/ProjectCard'

import portfolioImage from '../../../assets/images/portfolio.png'
import ProductCard from '../../../assets/images/ProductCard.png'

import OnlineStore from '../../../assets/images/CardProduct.png'

import MetrikaImage from '../../../assets/images/Metrika.png'
import { UnderlinedReference } from '../About/styled'
import { Container } from './styled'

const Projects: FC = () => {
	return (
		<Container id='projects'>
			<SecondTitle name="Recent Projects I've created" />
			<ProjectCard
				image={portfolioImage}
				period='September 2023'
				title='Portfolio'
				description={
					<p>
						This is a small serverless{' '}
						<UnderlinedReference href='https://react.dev/' target='_blank'>
							React
						</UnderlinedReference>{' '}
						and{' '}
						<UnderlinedReference
							href='https://www.typescriptlang.org/'
							target='_blank'
						>
							TypeScript
						</UnderlinedReference>{' '}
						application that I developed as an online version of my resume and
						portfolio that you are currently viewing. Here I have provided
						information about my experience as a front-end developer and also
						shared some of my projects. I hope you can get a complete picture of
						my skills and achievements.
					</p>
				}
				technology={['React', 'TypeScript', 'Styled Components']}
				gitHubLink='https://github.com/khuseinov/portfolio'
				link='/'
			/>
			<ProjectCard
				image={ProductCard}
				period='August 2023'
				title='portfolio'
				description='A small web application with product cards, created by me. There are a variety of products presented here, each with detailed descriptions, images and prices. Users can easily browse and select products, add them to cart, and place orders.
				'
				technology={['React', 'Redux(Toolkit)', 'TypeScript', 'Tailwind']}
				gitHubLink='https://github.com/khuseinov/react-redux'
				link='https://react-redux-huseynov98.vercel.app/'
			/>
			<ProjectCard
				image={OnlineStore}
				period='September 2023'
				title='portfolio'
				description='small project asdkljas kldjaksld lsadk lakdl aksdl askdl;s ;akdl;a skdslad kasldk ldaks skd sl'
				technology={['React', 'TypeScript']}
				gitHubLink='https://github.com/khuseinov/firebase-product-list'
				link='https://khuseinov.github.io/firebase-product-list/src/'
			/>
			<ProjectCard
				image={MetrikaImage}
				period='September 2023'
				title='portfolio'
				description='small project asdkljas kldjaksld lsadk lakdl aksdl askdl;s ;akdl;a skdslad kasldk ldaks skd sl'
				technology={['React', 'TypeScript']}
				gitHubLink='https://github.com/khuseinov/metrica'
				link='https://khuseinov.github.io/metrica/'
			/>
		</Container>
	)
}

export default Projects
