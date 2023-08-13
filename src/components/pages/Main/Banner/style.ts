import styled from "styled-components";
import { color } from "@styles/theme.style";
import { SubTitle, BodyLarge } from "@styles/text.style";

export const Banner = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 40px;
	gap: 20px;

	width: 100%;
	min-width: max-content;
	height: 136px;

	background: ${color.grayLight2};
	border-radius: 8px;
`;

export const BannerText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 4px;
	width: 192px;
	height: 56px;
`;

export const BannerTitle = styled(SubTitle)`
	width: fit-content;
	height: 28px;
	
	line-height: 28px;
	
	color: ${color.black};
`;

export const BannerSubtitle = styled(BodyLarge)`
	width: fit-content;
	height: 24px;
	
	line-height: 24px;
	
	color: ${color.black};
`;