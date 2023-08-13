import styled from "styled-components";

import { BodyStrong, Body2 } from '@styles/text.style';
import { color } from "@styles/theme.style";

export const Record = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 10px;

	width: fit-content;
	height: 47px;
`;

export const RecordTitle = styled(BodyStrong)`
	line-height: 20px;

	color: ${color.grayDark1};
`;

export const RecordScore = styled(Body2)`
	line-height: 17px;

	color: ${color.grayDark1};
`;