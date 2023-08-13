import { User } from "@assets/images/icon/User";
import { color } from "@styles/theme.style";
import * as S from "./style";

interface PropTypes {
    backWidth?: string,
    iconWidth?: number,
    onClick?: ()=>void; 
}

const UserIcon = (
    {
        backWidth = "48px",
        iconWidth = 26,
        onClick
    }: PropTypes
) => {
    return (  
        <S.Background width={backWidth} onClick={onClick}>
            <User fill={color.grayDark1} width={iconWidth}/>
        </S.Background>
    );
}
 
export default UserIcon;