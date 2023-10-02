import { motion } from 'framer-motion'
import styled from 'styled-components'
export const Container = styled.main`
	padding: 0 150px;
	transition: var(--transition);
	background-color: var(--bg-color);

	@media screen and (max-width: 1080px) {
		padding: 0 100px;
	}

	@media screen and (max-width: 840px) {
		padding: 0 50px;
	}
	@media screen and (max-width: 480px) {
		padding: 0 25px;
	}
`

export const SectionStyle = styled(motion.section)`
	margin: 0 auto;
	max-width: 1000px;
	padding-top: 100px;
	padding-bottom: 100px;

	@media screen and (max-width: 840px) {
		padding: 80px 0;
	}
	@media screen and (max-width: 480px) {
		padding: 60px 0;
	}
`
