import styled from 'styled-components'

export const Content = styled.nav`
	height: 100%;
	width: 100%;
	padding: 0px 50px;
	display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	-webkit-box-align: center;
	align-items: center;
	transition: var(--transition);

	@media screen and (max-width: 1080px) {
		padding: 0 40px;
		height: 75px;
	}

	@media screen and (max-width: 840px) {
		padding: 0 25px;
		height: 65px;
	}
`

export const Logo = styled.a`
	position: relative;
	z-index: 100;
	height: 454px;
	width: 42px;

	svg {
		display: block;
		width: 100%;
		height: 100%;
		transition: var(--transition);

		&:hover {
			fill: var(--accent-glow-color);
		}
	}
`

export const Nav = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	@media screen and (max-width: 840px) {
		position: fixed;
		top: 0;
		height: 100vh;
		right: -100vw;
		width: calc(min(75vw, 400px));
		z-index: 30;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		padding: 70px 0;

		background-color: var(--bg-lighter-color);
		box-shadow: -10px 0 30px -15px var(--shadow-color);
		visibility: hidden;
		transition: var(--transition);
	}
`

export const Burger = styled.div`
	display: none;
	justify-content: space-around;
	flex-flow: column nowrap;
	gap: 5.1px;
	width: 2rem;
	height: 1rem;
	position: fixed;
	top: 20px;
	right: 20px;
	cursor: pointer;

	@media screen and (max-width: 840px) {
		display: flex;
	}

	div {
		border-radius: 10px;
		width: 22px;
		height: 100%;
		background-color: var(--accent-color);
		transform-origin: 1px;
		transition: all 0.3s linear;

		&:nth-child(1) {
			transform: rotate(0);
		}

		&:nth-child(2) {
			transform: translateX(0);
			opacity: 1;
		}

		&:nth-child(3) {
			transform: rotate(0);
		}
	}
`

export const NavList = styled.ul`
	display: flex;
	flex-flow: row nowrap;

	@media screen and (max-width: 840px) {
		width: 100%;
		display: block;
		justify-content: center;
		margin-bottom: 20px;
		text-align: center;
		overflow-y: auto;
	}
`
export const NavItems = styled.li`
	margin: 0 5px;

	@media screen and (max-width: 840px) {
		margin: 0 0 10px;
		width: 100%;
	}
`
export const NavLink = styled.a`
	display: block;
	padding: 10px;
	color: var(--text-color-white);
	font-family: var(--font-monospace);
	font-size: 13px;
	transition: color 0.25s ease-in-out;

	&::before {
		counter-increment: section-link;
		content: '0' counter(section-link) '.';
		margin-right: 5px;
		color: var(--accent-color);
		font-size: 12px;

		@media screen and (max-width: 840px) {
			display: block;
			margin-right: 0;
			margin-bottom: 5px;
			font-size: 14px;
			text-align: center;
		}
	}

	@media screen and (max-width: 840px) {
		width: 100%;
		padding: 0 20px 20px;
		font-size: 16px;
		text-align: center;
	}
`
// export const NavButton = styled.button`
// 	display: flex;
// 	flex-flow: row nowrap;
// 	justify-content: center;
// 	align-items: center;
// 	padding: 0.75rem 1rem;
// 	margin-left: 15px;
// 	border: 1px solid var(--accent-color);
// 	border-radius: var(--border-radius);
// 	background-color: transparent;
// 	outline: none;
// 	cursor: pointer;
// 	transition: background-color 0.25s ease-in-out;
// 	font-family: inherit;

// 	@media screen and (max-width: 840px) {
// 		margin-left: 0;
// 		padding: 13px 30px;
// 	}

// 	&:hover {
// 		background-color: var(--accent-glow-color);
// 	}
// `
// export const NavText = styled.div`
// 	color: var(--accent-color);
// 	font-size: 13px;

// 	@media screen and (max-width: 840px) {
// 		font-size: 14px;
// 	}
// `
export const Overlay = styled.div`
	display: none;
	position: fixed;
	z-index: 20;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
`
export const Container = styled.header<{
	isSidebarVisible: boolean
	isScrolled: boolean
	isHidden: boolean
}>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	height: 70px;
	background-color: var(--bg-color);
	transform: translateY(0px);
	transition: var(--transition);
	z-index: 100;

	${({ isSidebarVisible }) => (isSidebarVisible ? '&' : '&:not(&)')} {
		@media screen and (max-width: 840px) {
			backdrop-filter: none;

			& ~ * {
				filter: blur(5px) brightness(0.7);
			}

			${Overlay} {
				display: block;
			}

			${Nav} {
				right: 0;
				visibility: visible;
			}

			${Burger} {
				z-index: 50;
				div {
					&:nth-child(1) {
						transform: rotate(45deg);
					}

					&:nth-child(2) {
						transform: translateX(100%);
						opacity: 0;
					}

					&:nth-child(3) {
						transform: rotate(-45deg);
					}
				}
			}
		}
	}

	&${({ isHidden }) => (isHidden ? '&' : '&:not(&)')} {
		transform: translateY(-100px);

		@media screen and (max-width: 840px) {
			${Nav} {
				transform: translateY(100px);
			}
		}

		${({ isScrolled }) => (isScrolled ? '&' : '&:not(&)')} {
			height: 70px;
			box-shadow: 0 10px 30px -10px var(--shadow-color);
			background-color: var(--bg-low-opacity-color);
			backdrop-filter: blur(10px);
		}
	}
`
