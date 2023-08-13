import React from "react";
import { useState } from "react";
import * as S from "./style";
import { useMutation } from "react-query";

import AuthLayout from "@layouts/AuthLayout";
import { Body2, BodyLarge, BodyStrong, TitleLarge } from "@styles/text.style";
import Input from "@components/common/Input";
import Button from "@components/common/Button";
import { useNavigate } from "react-router-dom";
import { postLogin } from "@apis/auth";
import { setCookie } from "@utils/cookies";
import { getExpiredCookieHours } from "@utils/expires";
import { alertError, alertSuccess, alertWarning } from "@utils/toastify";

const Login = () => {
    const router = useNavigate();
    const [userData, setUserData] = useState({
        id: "",
        password: "",
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const { mutate: loginMutate } = useMutation(postLogin, {
        onSuccess: (res) => {
            setCookie("accessToken", res.data.access.token, {
                path: "/",
                expires: getExpiredCookieHours(res.data.access.expiresAt),
            });
            setCookie("refreshToken", res.data.refresh.token, {
                path: "/",
                expires: getExpiredCookieHours(res.data.refresh.expiresAt),
            });
            router("/");
            alertSuccess("로그인 성공했습니다.")
        },
        onError: () => {
            alertError("로그인에 실패했습니다.");
        },
    });

    const LoginOnClick = () => {
        if (userData.id === "") {
            alertWarning("아이디를 입력해주세요.");
        } else if (userData.password === "") {
            alertWarning("비밀번호를 입력해주세요.");
        } else {
            loginMutate(userData);
        }
    };

    return (
        <AuthLayout position="left">
            <div>
                <S.Title>
                    <BodyLarge>Log In</BodyLarge>
                    <TitleLarge>로그인</TitleLarge>
                </S.Title>
                <S.InputContainer>
                    <Input
                        title="아이디"
                        width="100%"
                        placeholder="아이디를 입력해 주세요"
                        name="id"
                        onChange={onChange}
                    />
                    <Input
                        title="비밀번호"
                        width="100%"
                        placeholder="비밀번호를 입력해 주세요"
                        name="password"
                        onChange={onChange}
                        type="password"
                    />
                </S.InputContainer>
                <S.SubmitContainer>
                    <div>
                        <Body2>회원이 아니신가요?</Body2>
                        <BodyStrong onClick={()=>router('/enrollsign')}>회원가입</BodyStrong>
                    </div>
                    <Button
                        height="48px"
                        value="로그인"
                        onClick={() => LoginOnClick()}
                    />
                </S.SubmitContainer>
            </div>
        </AuthLayout>
    );
};

export default Login;
