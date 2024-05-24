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
						Multilingual support using i18n.
					</DescriptionResponsibility>
					<DescriptionResponsibility>
						Code coverage with tests (Jest + React Testing Library)
					</DescriptionResponsibility>
					<DescriptionResponsibility>
						Improved the code-style on the project, which significantly reduced
						the code-review time.
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
