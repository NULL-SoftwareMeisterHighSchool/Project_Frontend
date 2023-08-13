import styled from "styled-components";
import { Link } from "react-router-dom";

import { color } from "@styles/theme.style";
import { Body, BodyStrong } from "@styles/text.style";


export const Notify = styled(Link)`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	text-decoration: none;
	padding: 12px 24px;
	gap: 10px;

	width: 100%;
	min-width: fit-content;
	height: 64px;

	background: ${color.white};
	border-radius: 8px;

	&:hover{
		background-color: ${color.grayLight2};
	}
`;

export const NotifyInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Title = styled(BodyStrong)`
	width: 200px;
	height: 20px;

	color: ${color.black};
`;

export const TimeInfo = styled(Body)`
	width: 97px;
	height: 16px;

	color: ${color.grayDark1};
`;
