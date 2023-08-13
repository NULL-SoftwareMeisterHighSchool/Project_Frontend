import React from "react";
import { ButtonStateType } from "./button.type";
import * as S from "./style";

interface ButtonPropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	width?: string;
	height?: string;
	state?: ButtonStateType;
	value?: string;
	onClick?: ()=>void;
}

const Button = ({
	width,
	onClick,
	state = "DEFAULT",
	value,
	disabled,
}: ButtonPropTypes) => {
	return (
		<S.Button 
		state={state} 
		disabled={disabled} 
		onClick={onClick}
		style={{width}}
		>
			<S.Value>
				{value}
			</S.Value>
		</S.Button>
	);
};

export default Button;
