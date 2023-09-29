import { FC, useEffect, useState } from 'react'
import TagCloud from 'react-tag-cloud'
import SecondTitle from '../Sections/Sections'
import {
	Cloud,
	CloudWrapper,
	Container,
	TechSkillGroup,
	TechSkillsContent,
	TechText,
	TechTitle,
	Text,
} from './styled'

function getPadding() {
	const windowWidth = document.documentElement.clientWidth

	if (windowWidth < 480) {
		return 2
	} else if (windowWidth < 768) {
		return 5
	} else {
		return 15
	}
}

const TechStacks: FC = () => {
	const [currentNumber, setCurrentNumber] = useState(0)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setCurrentNumber(currentNumber => currentNumber + 1)
		}, 3000)

		return () => {
			clearTimeout(timeout)
		}
	}, [currentNumber])

	const skills = [
		'JavaScript',
		'TypeScript',
		'React',
		'React-Hooks',
		'Redux',
		'Redux-Thunk',
		'Redux-Toolkit',
		'Webpack',
		'Styled-Components',
		'Jest',
		'HTML',
		'CSS',
		'SCSS',
		'Sass',
		'Git',
		'GitHub',
		'Photoshop',
		'Figma',
		'Postman',
		'Vercel',
		'Netlify',
		'Framer-Motion',
	]
	return (
		<Container id='skills'>
			<SecondTitle name='My Technical Skills' />
			<TechSkillsContent>
				<Cloud>
					<CloudWrapper>
						<TagCloud
							style={{
								padding: () => getPadding(),
							}}
						>
							{skills.map(skill => (
								<div style={{ color: 'rgb(100, 255, 218)' }} key={skill}>
									{skill}
								</div>
							))}
						</TagCloud>
					</CloudWrapper>
				</Cloud>
				<Text>
					<TechSkillGroup>
						<TechTitle>Front-end development</TechTitle>
						<TechText>TypeScript(Basic), JavaScript(ES6+)</TechText>
						<TechText>React, Redux (Thunk,Toolkit)</TechText>
						<TechText>HTML, CSS, SCSS/Sas</TechText>
						<TechText>Styled-Components, Framer-Motion</TechText>
						<TechText>Webpack, Vite, Parcel</TechText>
					</TechSkillGroup>
					<TechSkillGroup>
						<TechTitle>Tools & Platforms</TechTitle>
						<TechText>Git, GitHub</TechText>
						<TechText>Figma, Photoshop</TechText>
						<TechText>Postman, Jest</TechText>
						<TechText>Vercel, Netlify</TechText>
					</TechSkillGroup>
				</Text>
			</TechSkillsContent>
		</Container>
	)
}

export default TechStacks