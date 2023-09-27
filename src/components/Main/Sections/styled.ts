import styled from 'styled-components'

export const Container = styled.h1`
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	position: relative;
	margin: 10px 0px 40px;
	width: 100%;
	font-size: clamp(24px, 5vw, 28px);
	white-space: nowrap;
	color: var(--text-color-light-grey);

	&::before {
		position: relative;
		bottom: 0px;
		counter-increment: section 1;
		content: '0' counter(section) '.';
		margin-right: 10px;
		color: var(--accent-color);
		font-family: var(--font-monospace);
		font-size: clamp(20px, 5vw, 16px);
		font-weight: 400;
	}

	&::after{
		content: "";
    display: block;
    position: relative;
    top: 5px;
    width: 425px;
    height: 0.5px;
    margin-left: 20px;
    background-color: var( --bg-brightest-light-color);
}
	}
`
