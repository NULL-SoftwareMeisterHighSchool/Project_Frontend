import { InputHTMLAttributes } from "react";
import { InputStateType } from "./input.type";
import * as S from "./style";
import { CriticalSmall } from "@assets/images/icon/CriticalSmall";
import { SuccessSmall } from "@assets/images/icon/SuccessSmall";

export interface InputPropTypes extends InputHTMLAttributes<HTMLInputElement> {
    title?: string;
    state?: InputStateType;
    width?: string;
    txtBtn?: string;
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
}: InputPropTypes) => {
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
            <S.Input
                min={min}
                max={max}
                onKeyDown={onKeyDown}
                state={state}
                style={{ width }}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                name={name}
                value={value}
            />
        </div>
    );
};

export default Input;
