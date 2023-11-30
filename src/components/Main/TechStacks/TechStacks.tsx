import { FC, useEffect, useState } from 'react'
import TagCloud from 'react-tag-cloud'
import SecondTitle from '../Sections/Sections'

import { motion } from 'framer-motion'
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

const TechStacks: FC = () => {
	const [currentNumber, setCurrentNumber] = useState(0)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setCurrentNumber(currentNumber => currentNumber + 1)
		}, 2000)

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
		'PhotoShop',
		'Figma',
		'Node.js',
		'Express',
		'Next.js',
		'Postman',
		'Vercel',
		'Netlify',
		'Framer-Motion',
		'Jira',
		'Trello',
		'RTL',
		'Tailwind',
		'Docker',
	]
	return (
		<Container
			id='skills'
			as={motion.section}
			variants={textAnimation}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			custom={1}
		>
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
						<TechText>TypeScript, JavaScript(ES6+)</TechText>
						<TechText>React, Redux (Thunk,Toolkit)</TechText>
						<TechText>HTML, CSS, SCSS/Sass</TechText>
						<TechText>Styled-Components, Framer-Motion, Tailwind </TechText>
						<TechText>Webpack, Vite, Parcel</TechText>
						<TechText>Jest, RTL</TechText>
						<TechText>Next.js</TechText>
					</TechSkillGroup>
					<TechSkillGroup>
						<TechTitle>Back-end development</TechTitle>
						<TechText>Node.js (Express)</TechText>
					</TechSkillGroup>
					<TechSkillGroup>
						<TechTitle>Tools & Platforms</TechTitle>
						<TechText>Git, GitHub</TechText>
						<TechText>Figma, Photoshop</TechText>
						<TechText>Docker</TechText>
						<TechText>Postman, Jira, Trello</TechText>
						<TechText>Vercel, Netlify</TechText>
					</TechSkillGroup>
				</Text>
			</TechSkillsContent>
		</Container>
	)
}

export default TechStacks
