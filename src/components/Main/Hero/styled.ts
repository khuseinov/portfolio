import styled from 'styled-components'
import { SectionStyle } from '../styled'

export const Container = styled(SectionStyle)`
	min-height: 100vh;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: flex-start;

	@media screen and (max-width: 840px) {
		padding: 80px 0;
	}
	@media screen and (max-width: 480px) {
		padding: 70px 0;
	}
`

export const Prefix = styled.div`
	margin-bottom: 22px;
	font-size: 15px;
	font-family: var(--font-monospace);
	color: var(--accent-color);
	line-height: 1.1;
	text-indent: 2px;

	@media screen and (max-width: 480px) {
		margin-bottom: 15px;
	}
`

export const PrimaryTitle = styled.div`
	font-size: clamp(32px, 5.4vw, 45px);
	font-weight: 700;
	line-height: 1.1;
	color: var(--text-color-white);
	margin-bottom: 10px;
`
export const SecondTitle = styled.div`
	font-size: clamp(32px, 5.4vw, 45px);
	font-weight: 700;
	line-height: 1.1;
	color: var(--text-color-grey);
	margin-bottom: 30px;
`
export const Description = styled.div`
	max-width: 500px;
	margin-bottom: 40px;
`
export const OpenResume = styled.a`
	font-family: var(--font-monospace);
	color: var(--accent-color);
	font-size: 14px;
	padding: 1rem 2rem;
	border: 1px solid var(--accent-color);
	border-radius: var(--border-radius);
	transition: var(--transition);
	cursor: pointer;
	background-color: var(--bg-color);

	&:hover {
		background-color: var(--accent-glow-color);
	}
`
