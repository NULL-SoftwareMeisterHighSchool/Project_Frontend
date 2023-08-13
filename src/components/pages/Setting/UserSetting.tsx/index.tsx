import { RightArrow } from "@assets/images/icon/RightArrow";
import * as S from "./style";
import { color } from "@styles/theme.style";
import React from "react";

type props = {
    title: string;
    onClick: ()=>void;
    icon: JSX.Element;
    colorType: string;
};

const UserSetting = ({ title, onClick, icon, colorType }: props) => {
    return (
        <S.SettingContainer onClick={onClick}>
            <div>
                <S.Icon>{icon}</S.Icon>
                <S.Title color={colorType}>{title}</S.Title>
            </div>
            <RightArrow fill={color.grayBase} width={24} height={24} />
        </S.SettingContainer>
    );
};

export default UserSetting;
