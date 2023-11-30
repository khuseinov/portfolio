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
			companyName: 'My Facets | Мои Грани',
			link: 'https://moigrani.ru/',
			position: 'Frontend Software Engineer',
			period: 'August 2022 - Present',
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
		{
			companyName: 'Sosivio',
			link: 'https://sosiv.io/',
			position: 'Frontend Developer',
			period: 'January 2021 - August 2021',
			location: 'Tel Aviv, Israel (Remote)',
			description: (
				<div>
					<DescriptionResponsibility>
						Development of Dashboard in React + TypeScript in collaboration with
						AI and backend teams.
					</DescriptionResponsibility>
					<DescriptionResponsibility>
						Improved SEO optimization, eliminating many bugs and increasing
						quality user experience.
					</DescriptionResponsibility>
					<DescriptionResponsibility>
						Creation of a scalable and reliable code base with 65%+ test
						coverage
					</DescriptionResponsibility>
					<DescriptionResponsibility>
						Development and support of a UI-Kit consisting of reusable
						components to standardize the interface and speed up development.
					</DescriptionResponsibility>
				</div>
			),
		},
		{
			companyName: 'Crypton Studio',
			link: 'https://crypton.studio/en/',
			position: 'Frontend Developer',
			period: 'May 2020 - January 2021',
			location: 'Tomsk, Russia (Remote)',
			description: (
				<div>
					<DescriptionResponsibility>
						Was one of the first developers who actively influenced the
						implementation and effective using React when it first came to the
						company
					</DescriptionResponsibility>
					<DescriptionResponsibility>
						Optimized Git flow, making it more efficient and relevant to needs
						project.
					</DescriptionResponsibility>
					<DescriptionResponsibility>
						Improved the code-style of projects, expanding the ESLint and
						prettier configuration with my own rules, increasing the level of
						code quality and reducing the number of errors.
					</DescriptionResponsibility>
					<DescriptionResponsibility>
						Participated in cross-code reviews, task estimation and sprint
						planning
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
