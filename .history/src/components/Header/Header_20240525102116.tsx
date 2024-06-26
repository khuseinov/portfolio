import { FC, useEffect, useRef, useState } from 'react'

import { motion } from 'framer-motion'
import {
	Burger,
	Container,
	Content,
	Logo,
	Nav,
	NavItems,
	NavLink,
	NavList,
	Overlay,
} from './styled'

const Header: FC = () => {
	// Show and hide sidebar
	const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false)
	const hideSidebar = () => {
		setIsSidebarVisible(false)
	}
	const showSidebar = () => {
		setIsSidebarVisible(true)
	}
	// Hide sidebar when switching to desktop mode
	useEffect(() => {
		const resizeHandler = () => {
			if (window.innerWidth > 768 && isSidebarVisible) {
				hideSidebar()
			}
		}

		window.addEventListener('resize', resizeHandler)
		return (): void => {
			window.removeEventListener('resize', resizeHandler)
		}
	}, [isSidebarVisible])

	// Hiding and showing header on scroll
	const [isHidden, setIsHidden] = useState<boolean>(false)
	const [scrollHeight, setScrollHeight] = useState<number>(window.scrollY)
	useEffect(() => {
		const scrollHandler = () => {
			setIsHidden(
				window.scrollY > scrollHeight ||
					window.scrollY + window.innerHeight >=
						document.documentElement.scrollHeight
			)
			setScrollHeight(window.scrollY)
		}

		document.addEventListener('scroll', scrollHandler)
		return (): void => {
			document.removeEventListener('scroll', scrollHandler)
		}
	}, [scrollHeight])

	const [isMounted, setIsMounted] = useState<boolean>(false)
	useEffect(() => {
		setTimeout(() => setIsMounted(true), 100)
	}, [])

	const burgerRef = useRef(null)

	const navItems = [
		{
			ref: useRef(null),
			href: '#about',
			text: 'About',
		},
		{
			ref: useRef(null),
			href: '#experience',
			text: 'Experience',
		},
		{
			ref: useRef(null),
			href: '#skills',
			text: 'Skills',
		},
		// {
		// 	ref: useRef(null),
		// 	href: '#projects',
		// 	text: 'Projects',
		// },
		{
			ref: useRef(null),
			href: '#contact',
			text: 'Contact',
		},
	]

	const headerAnimation = {
		hidden: {
			y: -20,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
		},
	}

	return (
		<Container
			isScrolled={scrollHeight > 0}
			isHidden={isHidden}
			isSidebarVisible={isSidebarVisible}
		>
			<Content
				as={motion.div}
				variants={headerAnimation}
				initial='hidden'
				whileInView='visible'
				viewport={{ amount: 0.2, once: true }}
			>
				<Logo
					variants={headerAnimation}
					as={motion.a}
					transition={{
						ease: 'linear',
						delay: 0,
					}}
					href='/'
				>
					<svg
						width='84'
						height='96'
						viewBox='0 0 84 96'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M5.5 68.572V26.4601L41.9722 5.88599L78.5 27.428V69.5399L42.0278 90.114L5.5 68.572Z'
							fill='#0A192F'
							stroke='#0AFFDA'
							strokeWidth='5'
						/>
						<path
							d='M29.019 65V30.2641H42.7234C45.3467 30.2641 47.5855 30.7334 49.4399 31.6719C51.3056 32.5991 52.7247 33.9164 53.6971 35.6238C54.6808 37.3198 55.1727 39.3156 55.1727 41.611C55.1727 43.9176 54.6752 45.9021 53.6802 47.5642C52.6851 49.2151 51.2434 50.4815 49.3551 51.3635C47.4781 52.2454 45.2054 52.6864 42.5369 52.6864H33.361V46.784H41.3496C42.7517 46.784 43.9163 46.5918 44.8435 46.2074C45.7707 45.8229 46.4605 45.2462 46.9128 44.4773C47.3764 43.7084 47.6082 42.753 47.6082 41.611C47.6082 40.4576 47.3764 39.4852 46.9128 38.6937C46.4605 37.9022 45.7651 37.3029 44.8266 36.8958C43.8994 36.4775 42.7291 36.2683 41.3157 36.2683H36.3631V65H29.019ZM47.7778 49.1925L56.4108 65H48.3036L39.857 49.1925H47.7778Z'
							fill='#0AFFDA'
						/>
						<polygon points='42,3 3,25 3,70 42,93 81,71 81,26 '></polygon>
					</svg>
				</Logo>
				{isMounted && (
					<Burger
						ref={burgerRef}
						onClick={isSidebarVisible ? hideSidebar : showSidebar}
					>
						<div />
						<div />
						<div />
					</Burger>
				)}
				<Nav>
					<NavList>
						{navItems.map(({ ref, href, text }, idx) => (
							<NavItems
								variants={headerAnimation}
								as={motion.li}
								transition={{
									ease: 'easeInOut',
									duration: 0.6,
									delay: idx * 0.2,
								}}
								ref={ref}
								key={idx}
							>
								<NavLink href={href}>{text}</NavLink>
							</NavItems>
						))}
					</NavList>
					{/* <NavButton>
						<NavText>Resume</NavText>
					</NavButton> */}
				</Nav>
				<Overlay onClick={() => hideSidebar()} />
			</Content>
		</Container>
	)
}

export default Header
