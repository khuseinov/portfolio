import styled from 'styled-components'

import { motion } from 'framer-motion'
export const Container = styled(motion.aside)`
	position: fixed;
	width: 40px;
	left: 40px;
	bottom: 0;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	transition: var(--transition);

	@media screen and (max-width: 1080px) {
		left: 20px;
	}
	@media screen and (max-width: 840px) {
		display: none;
	}

	&:after {
		content: '';
		display: block;
		height: 90px;
		width: 1px;
		align-self: center;
		margin-top: 20px;
		background-color: var(--text-color-light-grey);
	}
`

export const Icon = styled(motion.a)`
	padding: 10px;
	cursor: pointer;

	&:last-of-type {
		margin-bottom: 5px;
	}

	svg {
		display: block;
		height: 18px;
		width: 18px;
		fill: var(--text-color-light-grey);
		transition: var(--transition);
	}

	&:hover svg {
		fill: var(--accent-color);
		transform: translateY(-3px);
	}
`
