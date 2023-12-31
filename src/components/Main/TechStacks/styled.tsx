import styled from 'styled-components'
import { SectionStyle } from '../styled'

export const Container = styled(SectionStyle)`
	max-width: 900px;
	padding-right: 20px;
`
export const TechSkillsContent = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: stretch;
	gap: 150px;

	@media screen and (max-width: 480px) {
		flex-flow: row wrap;
	}
`

export const Text = styled.div`
	flex: 0 0 auto;
	background-color: var(--bg-color);

	@media screen and (max-width: 480px) {
		flex: 1 1 auto;
	}
`

export const TechSkillGroup = styled.div`
	margin-bottom: 10px;
`

export const TechTitle = styled.div`
	font-size: 18px;
	margin-bottom: 3px;
	color: var(--text-color-white);

	@media screen and (max-width: 480px) {
		font-size: 17px;
	}
`

export const TechText = styled.p`
	position: relative;
	text-indent: 30px;
	margin-bottom: 5px;

	&::before {
		content: '✧';
		position: absolute;
		left: -25px;
		top: 6px;
		color: var(--accent-color);
		font-size: 20px;
		line-height: 12px;
	}
`

export const Cloud = styled.div`
	flex: 1 1 100px;
	margin: 20px 20px 0 40px;
	border-radius: var(--border-radius);
	overflow: hidden;
	position: relative;

	@media screen and (max-width: 840px) {
		margin: 20px 0 0 10px;
	}
	@media screen and (max-width: 480px) {
		flex: 0 0 100%;
		margin: 0 0 10px 0;
		padding-top: 30%;
		order: -1;
	}
`
export const CloudWrapper = styled.div`
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;

	@media screen and (max-width: 480px) {
		position: absolute;
	}
	> div {
		height: 100%;
		width: 100%;
		overflow: hidden !important;
		> div {
			font-family: var(--font-monospace) !important;
			font-size: 14px !important;
			transition: all 1s ease-in-out;
			color: var(--text-color-white);
		}
	}
`
