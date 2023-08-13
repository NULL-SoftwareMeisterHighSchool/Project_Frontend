import React from "react";

import * as S from './style';
import { ReactNode } from "react";
import { SetStateAction } from 'react';


interface OptionPropsType {
	to : string;
	pagename : string;
	category: SetStateAction<string>;
	onSelect: Function;
	children: ReactNode;
}

interface IconPropsType {
	children: any;
	fill: string;
}

const Icon = ({ children, fill }: IconPropsType) => {
	return React.cloneElement(children, {width : 24, fill : fill})
};

export const Option = ({
	to, 
	pagename,
	category,
	onSelect,
	children
}:OptionPropsType) => {
	return (
		<S.Option 
		to={to}
		onClick={() => onSelect(pagename)}
		style={category === pagename ? {background: "#0084DB"} : {}}
		>
			<Icon fill = {category === pagename ? "#FFFFFF" : "#7A8184"}>{children}</Icon>
			<S.PageName style={category === pagename ? {color: "#FFFFFF"} : {color: "#7A8184"}}>{pagename}</S.PageName>
		</S.Option>
	);
};
