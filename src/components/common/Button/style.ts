import { ButtonStateType } from "./button.type";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { color } from "@styles/theme.style";
import { BodyStrong } from "@styles/text.style";

export const Button = styled.button<{
	state: ButtonStateType;
}>`
	padding: 14px 22px;
	border-radius: 8px;
	cursor: pointer;
	color: ${color.white};
	${({ state }) => state && getButtonStyle[state]}
	${({ disabled }) =>
		disabled &&
		css`
			background-color: ${color.grayLight1};
			color: ${color.grayBase};
		`};
`;

export const Value = styled(BodyStrong)``;

const getButtonStyle: Record<ButtonStateType, FlattenSimpleInterpolation> = {
	DEFAULT: css`
		background-color: ${color.primaryBase};
		:hover {
			background-color: ${color.primaryLight1};
		}
		:active {
			background-color: ${color.primaryDark1};
		}
	`,
	ATTENTION: css`
		background-color: #db2c36;
		color: #ffe6d8;
		:hover,
		:active {
			background-color: #ffe6d8;
			color: #db2c36;
		}
	`,
	CAUTION: css`
		background-color: #b75f00;
		color: #fff2cc;
		:hover,
		:active {
			background-color: #fff2cc;
			color: #b75f00;
		}
	`,
	SUCCESS: css`
		background-color: #2c8c1c;
		color: #e7fad4;
		:hover,
		:active {
			background-color: #e7fad4;
			color: #2c8c1c;
		}
	`,
	CRITICAL: css`
		background-color: #3349d8;
		color: ${color.grayLight2};
		:hover,
		:active {
			background-color: ${color.grayLight2};
			color: #3349d8;
		}
	`,
	GRAY: css`
		background-color: ${color.grayLight2};
		color: ${color.grayDark2};
		:hover {
			background-color: ${color.grayBase};
			color: ${color.white};
		}
		:active {
			background-color: ${color.grayLight2};
			color: ${color.grayDark2};
		}
	`,
};
