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
			companyName: 'Profisites',
			link: 'https://www.profisites.tj/',
			position: 'Frontend Developer',
			period: 'October 2021 - Present',
			location: 'Dushanbe, Tajikistan (Remote)',
			description: (
				<div>
					<DescriptionResponsibility>
						Actively used TypeScript and React to optimize the performance and
						stability of web applications.
					</DescriptionResponsibility>
					<DescriptionResponsibility>
						Conducted a successful project migration process from using vanilla
						HTML, CSS and JavaScript to more modern technologies, including
						TypeScript, React and Styled Components.
					</DescriptionResponsibility>
					<DescriptionResponsibility>
						Supported a set of components for the UI-Kit, which helped
						standardize the design and speed up development.
					</DescriptionResponsibility>
					<DescriptionResponsibility>
						Introduced updated technologies and design solutions for websites,
						which simplified development and reduced the time spent on selecting
						products and placing orders by more than 50%.
					</DescriptionResponsibility>
				</div>
			),
		},
		{
			companyName: 'Aston',
			link: 'https://astondevs.ru/',
			position: 'Trainee Frontend Developer',
			period: 'July 2021 - October 2021',
			location: 'Kazan, Russia',
			description: (
				<div>
					<DescriptionResponsibility>
						Participation in the Online JS Core intensive, which included
						theoretical classes, practice and homework, which gave me a solid
						foundation in JavaScript, HTML/CSS and working with Git.
					</DescriptionResponsibility>
					<DescriptionResponsibility>
						Continuation of the internship as part of the Online
						React-intensive, with an emphasis on developing web applications in
						React and TypeScript, as well as participation in group projects.
					</DescriptionResponsibility>
					<DescriptionResponsibility>
						Completion of an internship at the Laboratory, where, under the
						guidance of experienced specialists, I developed not only technical
						skills, but also soft skills, preparing for work on commercial
						projects.
					</DescriptionResponsibility>
				</div>
			),
		},
		{
			companyName: 'Self-education',
			link: 'https://rustamkhuseinov.com/',
			position: 'Frontend Developer',
			period: 'January 2021 - August 2021',
			location: 'Kazan, Russia',
			description: (
				<div>
					<DescriptionResponsibility>
						In-depth study of JavaScript/TypeScript/React and related
						technologies using them in your own projects.
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
