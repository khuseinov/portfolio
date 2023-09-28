import styled from 'styled-components'
import { SectionStyle } from '../styled'

export const Container = styled(SectionStyle)`
	max-width: 900px;
	padding-right: 20px;
`
export const Content = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: flex-start;
	gap: 50px;
	@media screen and (max-width: 840px) {
		flex-flow: row wrap;
		justify-content: center;
	}
`

export const PrimaryDescription = styled.div`
	margin: 0 0 15px;
	width: 620px;
`

export const UnderlinedReference = styled.a`
	display: inline-block;
	position: relative;
	color: var(--accent-color);

	&:hover::after {
		width: 100%;
	}

	&::after {
		content: '';
		display: block;
		width: 0px;
		height: 1px;
		position: absolute;
		bottom: 0.2em;
		background-color: var(--accent-color);
		opacity: 0.5;
		transition: var(--transition);
	}
`

export const SecondDescription = styled.div`
	margin: 0 0 15px;
	width: 620px;
`

export const Image = styled.div`
	flex: 0 0 calc((100% - 50px) * 0.4);
	max-width: 300px;
	position: relative;
	border-radius: var(--border-radius);
	top: 5px;
	left: 5px;
	transition: var(--transition);

	&:hover {
		top: 0px;
		left: 0px;
		transition: var(--transition);
	}

	@media screen and (max-width: 840px) {
		flex: 0 0 70%;
	}

	&::after {
		content: '';
		display: block;
		position: absolute;
		top: 15px;
		left: 15px;
		width: 290px;
		height: 290px;
		border-radius: var(--border-radius);
		border: 2px solid var(--accent-color);
		transition: var(--transition);

		z-index: -1;
	}

	&:hover::after {
		top: 8%;
		left: 8%;
	}
	z-index: 10;

	> div {
		position: relative;
		width: 100%;
		height: 100%;
		will-change: opacity;
		background-color: var(--accent-color);
		border-radius: 6px;
		transition: var(--transition);
		cursor: pointer;

		&:hover {
			background-color: transparent;
		}

		> div {
			width: 100%;
			padding-top: 100%;
			position: relative;
			overflow: hidden;
			border-radius: 5px;
			filter: grayscale(1);
			transition: var(--transition);
			mix-blend-mode: multiply;

			&:hover {
				filter: none;
			}

			img {
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
`
