import { useEffect, useState } from "react";
import * as S from "./style";
import AuthLayout from "@layouts/AuthLayout";

import { Body2, BodyLarge, BodyStrong, TitleLarge } from "@styles/text.style";
import Input from "@components/common/Input";
import Button from "@components/common/Button";
import { useMutation } from "react-query";
import { patchEditPassword } from "@apis/users";
import { useNavigate } from "react-router-dom";
import { alertError, alertSuccess, alertWarning } from "@utils/toastify";
import { useRecoilValue } from "recoil";
import { profileIdAtom } from "@atoms/profile";

const Password = () => {
    const router = useNavigate();
    const [userData, setUserData] = useState({
        currentPassword: "",
        newPassword: "",
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const { mutate: editPasswordMutate } = useMutation(patchEditPassword, {
        onSuccess: () => {
            alertSuccess("비밀번호 변경이 완료되었습니다.");
            router("/setting");
        },
        onError: () => {
            alertError("비밀번호 변경 실패했습니다.");
        },
    });

    const onClickPwChange = () => {
        if (userData.currentPassword === "") {
            alertWarning("기존 비밀번호를 입력해주세요.");
        } else if (userData.newPassword === "새로운 비밀번호를 입력해주세요.") {
            alertWarning("새로운 비밀번호를 입력해주세요.");
        } else if (userData.currentPassword === userData.newPassword) {
            alertWarning("기존 비밀번호와 다르게 설정해주세요.");
        } else if (userData.currentPassword.length < 8) {
            alertWarning("비밀번호 길이가 8자 이상이어야 합니다.");
        } else if (userData.currentPassword.length > 16) {
            alertWarning("비밀번호 길이가 16자 이하이어야 합니다.");
        } else {
            editPasswordMutate(userData);
        }
    };

    const myid = useRecoilValue(profileIdAtom);

    useEffect(()=>{
        if (!myid) {
            alertError("로그인 후 이용 가능합니다.");
            router("/login");
        }
    })

    return (
        <AuthLayout position="right">
            <div>
                <S.Title>
                    <BodyLarge>Change Password</BodyLarge>
                    <TitleLarge>비밀번호 변경</TitleLarge>
                </S.Title>
                <S.InputContainer>
                    <Input
                        title="기존 비밀번호"
                        width="100%"
                        placeholder="기존에 사용하던 비밀번호를 입력해 주세요"
                        name="currentPassword"
                        onChange={onChange}
                        type="password"
                    />
                    <Input
                        title="새 비밀번호"
                        width="100%"
                        placeholder="영·숫자·기호 포함 8자 이상요"
                        name="newPassword"
                        onChange={onChange}
                        type="password"
                    />
                </S.InputContainer>
                <Button
                    onClick={onClickPwChange}
                    height="48px"
                    value="비밀번호 변경"
                />
            </div>
        </AuthLayout>
    );
};

export default Password;
