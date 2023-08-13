import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TitleLarge, BodyLarge, BodyStrong, Body2, SubTitle } from '@styles/text.style'
import { color } from '@styles/theme.style';

export const Github = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	gap: 20px;

	width: 100%;
	min-width: max-content;
	height: max-content;
	@media screen and (max-width: 1600px){
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const Score = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 40px;
`;

export const CircularText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 4px;
`;

export const ScoreTitle = styled(SubTitle)`
	font-family: 'Pretendard';
	font-style: normal;
	line-height: 28px;
	color: ${color.primaryDark1};

	flex: none;
	order: 0;
	flex-grow: 0;
`;
export const ScoreTitleLogin =styled(SubTitle)`
	cursor: pointer;
	font-family: 'Pretendard';
	font-style: normal;
	line-height: 28px;
	color: ${color.primaryDark1};
	transition: all 0.4s ease-in-out;
	&:hover{
		scale: 1.1;
	}
`

export const ScoreSubtitle = styled(BodyLarge)`
	font-family: 'Pretendard';
	font-style: normal;
	line-height: 24px;

	color:  ${color.primaryDark1};

	flex: none;
	order: 1;
	flex-grow: 0;
`;

export const Comprehensive = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 80px;

	@media screen and (max-width: 1266px) {
        display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 40px 80px;
    }

	@media screen and (max-width: 1154px) {
        display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 40px 80px;
    }
`;

export const BannerArea = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 40px;

	width: 100%;
	@media (max-width: 1200px) {
  		& {
    		flex-direction: column;
  		}
	}
`;

export const BoardArea = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 40px;

	width: 100%;
	min-width: fit-content;
	@media (max-width: 1600px) {
  		& {
    		flex-direction: column;
  		}
	}
`;

export const BlogContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0px;

	width: 100%;
	gap: 40px;
`;

export const Board = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;

	width: 100%;
`;








