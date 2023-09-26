import styled from 'styled-components'
export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	hight: 100px;
	background-color: var(--bg-color);
	transform: translateY(0px);
	transition: var(--transition);
`

export const Content = styled.div`
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
	}

	@media screen and (max-width: 840px) {
		padding: 0 25px;
	}
`

export const LogoWrap = styled.a`
	position: relative;
	z-index: 100;
	height: 42px;
	width: 42px;

	&:hover > svg > polygon {
		fill: var(--accent-glow-color);
	}

	svg {
		display: block;
		width: 100%;
		height: 100%;
		transition: var(--transition);
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
export const NavItem = styled.li`
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
export const NavButton = styled.button`
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	padding: 0.75rem 1rem;
	margin-left: 15px;
	border: 1px solid var(--accent-color);
	border-radius: var(--border-radius);
	background-color: transparent;
	outline: none;
	cursor: pointer;
	transition: background-color 0.25s ease-in-out;
	font-family: inherit;

	@media screen and (max-width: 840px) {
		margin-left: 0;
		padding: 13px 30px;
	}

	&:hover {
		background-color: var(--accent-glow-color);
	}
`
