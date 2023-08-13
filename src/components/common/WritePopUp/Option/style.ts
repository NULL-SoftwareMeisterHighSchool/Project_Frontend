import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Body2, BodyLarge2 } from '@styles/text.style';
import { color } from '@styles/theme.style';
import exp from 'constants';

export const Option = styled(Link)`
	display: flex;
    padding: 12px 24px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

	border-radius: 8px;
    background: ${color.grayLight2};
	text-decoration: none;
`;

export const OptionInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

export const Icon = styled.div`
	display: flex;
	width: 40px;
	height: 40px;
	justify-content: center;
	align-items: center;

	border-radius: 100px;
	background-color: ${color.white};
`;


export const OptionName = styled(BodyLarge2)`
	color: ${color.black};
`;

