import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import { UnderlinedReference } from '../About/styled'
import SecondTitle from '../Sections/Sections'
import {
	Container,
	Content,
	Description,
	DescriptionResponsibility,
	Job,
	Period,
	Position,
	Tab,
	TabsContainer,
	Title,
} from './styled'

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

const Experience: FC = () => {
	const [selectedTab, setSelectedTab] = useState<number>(0)

	const tabs = [
		{
			companyName: 'Smartway',
			link: 'https://smartway.today/',
			position: 'Frontend Software Engineer',
			period: 'January 2021 - Present',
			location: 'Moscow, Russia (Remote)',
			description: (
				<div>
					<DescriptionResponsibility>
						When merging projects, he participated in the design of a new FSD
						architecture, was involved in the transition from redux to
						redux-toolkit, which made it possible to significantly reduce the
						code base, get rid of duplication and increase code readability;
					</DescriptionResponsibility>
					<DescriptionResponsibility>
						Helped the design team design the design system, participated in the
						redesign of the internal UI kit and implemented StoryBook, which
						made it possible to achieve consistency between the design and the
						frontend part of the application;{' '}
					</DescriptionResponsibility>
					<DescriptionResponsibility>
						Together with the QA team, he was involved in the implementation and
						writing of UI and integration tests on PlayWright, which made it
						possible to cover the main user scenarios and basic components in
						the UI kit;
					</DescriptionResponsibility>
					<DescriptionResponsibility>
						Together with the frontend department, I migrated the project from
						Webpack to Vite, which made it possible to increase the speed of
						launching and building the application by 2 times and reduce the
						CI/CD completion time from 10 to 4 minutes;
					</DescriptionResponsibility>
				</div>
			),
		},
	]

	return (
		<Container
			id='experience'
			as={motion.section}
			variants={textAnimation}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			custom={1}
		>
			<SecondTitle name='Experience' />
			<Content>
				<TabsContainer selectedTab={selectedTab}>
					{tabs.map(({ companyName }, idx) => (
						<Tab
							key={companyName}
							onClick={() => setSelectedTab(idx)}
							selected={idx === selectedTab}
						>
							<span>{companyName}</span>
						</Tab>
					))}
				</TabsContainer>
				<Job>
					<Title>
						<Position>{tabs[selectedTab].position}</Position>
						<UnderlinedReference
							href={tabs[selectedTab].link}
							target='_blank'
							rel='nofollow noopener noreferrer'
						>
							{tabs[selectedTab].companyName}
						</UnderlinedReference>
					</Title>
					<Period>
						{tabs[selectedTab].period} | {tabs[selectedTab].location}
					</Period>
					<Description>{tabs[selectedTab].description}</Description>
				</Job>
			</Content>
		</Container>
	)
}

export default Experience
