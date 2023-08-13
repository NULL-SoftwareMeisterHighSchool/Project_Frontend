import * as S from './style';
import { ReactNode } from "react";
import { RightArrow } from "@assets/images/icon/RightArrow";
import { color } from "@styles/theme.style";

interface OptionPropsType {
	to : string;
	optionName : string;
	icon: ReactNode;
	onClick: ()=>void;
}

const Option = ({
	to, 
	optionName,
	icon,
	onClick
}:OptionPropsType) => {
	return (
		<S.Option 
			onClick={onClick}
			to={to}
		>
			<S.OptionInfo>
				<S.Icon>	
					{icon}
				</S.Icon>
				<S.OptionName>{optionName}</S.OptionName>
			</S.OptionInfo>
			<RightArrow width={24} fill={color.grayDark1}/>
		</S.Option>
	);
};

export default Option;