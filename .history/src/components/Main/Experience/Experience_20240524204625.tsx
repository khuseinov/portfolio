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
						Conducted a successful project migration process from using a
						standard HTML, CSS and JavaScript to more modern technologies,
						including TypeScript, React and styled components.
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
