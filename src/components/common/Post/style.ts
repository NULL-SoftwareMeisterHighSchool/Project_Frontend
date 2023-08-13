import styled from "styled-components";
import { Link } from "react-router-dom";

import { color } from "@styles/theme.style";
import { Body2 } from "@styles/text.style";


export const Post = styled(Link)<{padding?:string}>`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 18px ${(props) => props.padding};
	gap: 10px;
	text-decoration: none;

	width: 100%;
	min-width: max-content;
	height: 53px;
`;

export const PostTitle = styled(Body2)`
	width: 240px;
	height: 17px;

	line-height: 17px;

	color:${color.black};
`;

export const PostInfo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 10px;

	width: fit-content;
	height: 17px;
`;


export const PostName = styled(Body2)`
	width: fit-content;
	height: 17px;

	line-height: 17px;

	color: ${color.grayDark1};
`;

export const PostDate = styled(Body2)`
	width: fit-content;
	height: 17px;

	line-height: 17px;

	color: ${color.grayBase};
`;