import { InputHTMLAttributes, useEffect, useState } from "react";
import { InputStateType } from "./input.type";
import * as S from "./style";
import { CriticalSmall } from "@assets/images/icon/CriticalSmall";
import { SuccessSmall } from "@assets/images/icon/SuccessSmall";
import { Eye } from "@assets/images/icon/Eye";
import { EyeClose } from "@assets/images/icon/EyeClose";
import { color } from "@styles/theme.style";

export interface InputPropTypes extends InputHTMLAttributes<HTMLInputElement> {
    title?: string;
    state?: InputStateType;
    width?: string;
    txtBtn?: string;
    readOnly?: boolean;
}

const Input = ({
    width = "328px",
    title,
    state = "DEFAULT",
    placeholder,
    type = "text",
    name,
    value,
    txtBtn,
    onClick,
    onChange,
    onKeyDown,
    min,
    max,
    maxLength,
    readOnly = false,
}: InputPropTypes) => {
    const [nowType, setNowType] = useState("text");
    useEffect(() => {
        setNowType(type);
    }, [type]);
    return (
        <div>
            <S.Titlebox>
                <S.TitleInfo>
                    {state != "DEFAULT" &&
                        (state == "SUCCESS" ? (
                            <SuccessSmall fill="#2C8C1C" />
                        ) : (
                            <CriticalSmall fill="#DB2C36" />
                        ))}
                    {title && <S.Title>{title}</S.Title>}
                </S.TitleInfo>
                {txtBtn && <S.TxtBtn onClick={onClick}>{txtBtn}</S.TxtBtn>}
            </S.Titlebox>
            <S.InputContianer>
                {type === "password" && (
                    <S.IconContainer>
                        {nowType === "password" ? (
                            <EyeClose
                                width={30}
                                fill={color.grayDark2}
                                onClick={() => setNowType("text")}
                            />
                        ) : (
                            <Eye
                                width={30}
                                fill={color.grayDark2}
                                onClick={() => setNowType("password")}
                            />
                        )}
                    </S.IconContainer>
                )}
                <S.Input
                    min={min}
                    max={max}
                    onKeyDown={onKeyDown}
                    state={state}
                    style={{
                        width,
                        paddingRight: type === "password" ? "40px" : "14px",
                    }}
                    onChange={onChange}
                    placeholder={placeholder}
                    type={nowType}
                    name={name}
                    value={value}
                    maxLength={maxLength}
                    readOnly={readOnly}
                />
            </S.InputContianer>
        </div>
    );
};

export default Input;
