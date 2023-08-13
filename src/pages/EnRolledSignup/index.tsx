import React, { useEffect, useState } from "react";
import * as S from "./style";

import Button from "@components/common/Button";
import Input from "@components/common/Input";
import AuthLayout from "@layouts/AuthLayout";
import { useMutation } from "react-query";

import { Body2, BodyLarge, BodyStrong, TitleLarge } from "@styles/text.style";
import LeftArrow from "@assets/images/pages/LeftArrow.svg";
import { useNavigate } from "react-router-dom";
import Dropdown from "@components/common/Dropdown";
import { postSendEmail, postSignupStudent, postVerify } from "@apis/auth";
import {
    alertError,
    alertInfo,
    alertSuccess,
    alertWarning,
} from "@utils/toastify";

type DropdownType = {
    text: string;
};
const emailRex = new RegExp("^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");

const EnRolledSignup = () => {
    const now = new Date();
    const router = useNavigate();
    const [emailSend, setEmailSend] = useState(false);
    const { mutate: sendEmailMutate } = useMutation(postSendEmail, {
        onSuccess: () => {
            alertInfo("이메일이 발송되었습니다.", 1500);
            setEmailSend(false);
        },
        onError: ({ response }) => {
            if (response.status === 400) {
                alertWarning("학교 이메일을 입력해주세요");
            } else if (response.status === 409) {
                alertWarning("이미 회원가입된 이메일입니다.");
            } else {
                alertError("에러 발생. 관리자에게 문의해주세요.");
            }
            setEmailSend(false);
        },
    });

    const { mutate: verifyMutate } = useMutation(postVerify, {
        onSuccess: () => {
            setUserData({ ...userData, emailCode: true });
            setPageNum(2);
        },
        onError: () => {
            alertError("인증번호가 틀렸습니다.", 1500);
        },
    });

    const { mutate: signupStudent } = useMutation(postSignupStudent, {
        onSuccess: () => {
            alertSuccess("회원가입에 성공했습니다.", 2000);
            router("/login");
        },
        onError: ({ response }) => {
            if (response.data.statusCode === 409) {
                alertError(response.data.message);
            } else {
                alertError(
                    "회원가입에 실패하였습니다. 관리자에게 문의해주세요"
                );
            }
        },
    });

    const [pageNum, setPageNum] = useState(1);

    const [userData, setUserData] = useState({
        school: "",
        email: "",
        admissionYear: 0,
        name: "",
        code: "",
        userID: "",
        password: "",
        emailCode: true, // 수정 필요
        githubID: "",
    });

    const [userSchool, setUserSchool] = useState<DropdownType | undefined>({
        text: "대덕SW마이스터고",
    });
    const schoolSelect = [
        { text: "대덕SW마이스터고" },
        { text: "대구SW마이스터고" },
        { text: "광주SW마이스터고" },
        { text: "부산SW마이스터고" },
    ];
    useEffect(() => {
        setUserData({ ...userData, school: userSchool!.text });
    }, [userSchool]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const onClickPage = () => {
        if (userData.admissionYear === 0) {
            alertWarning("입학연도를 입력해주세요.");
        } else if (
            userData.admissionYear < 2015 ||
            userData.admissionYear > now.getFullYear()
        ) {
            alertWarning("입학년도가 잘못되었습니다.");
        } else if (userData.email === "") {
            alertWarning("이메일을 입력해주세요.");
        } else if (!emailRex.test(userData.email)) {
            alertWarning("이메일 형식이 올바르지 않습니다.");
        } else if (userData.code === "") {
            alertWarning("인증번호를 입력해주세요");
        } else {
            verifyMutate({ email: userData.email, code: userData.code.trim() });
        }
    };

    const onClickSignUp = () => {
        if (userData.name === "") {
            alertWarning("이름를 입력해주세요.");
        } else if (userData.password === "") {
            alertWarning("아이디를 입력해주세요.");
        } else if (userData.password === "") {
            alertWarning("비밀번호를 입력해주세요.");
        } else if (userData.githubID === "") {
            alertWarning("Github를 입력해주세요.");
        } else if (
            userData.password.length < 8 ||
            userData.password.length > 16
        ) {
            alertWarning("비밀번호 길이는 8자 이상 16자 이하이어야 합니다.");
        } else {
            signupStudent({
                school:
                    userData.school === "대덕SW마이스터고"
                        ? "DSM"
                        : userData.school === "대구SW마이스터고"
                        ? "DGSM"
                        : userData.school === "광주SW마이스터고"
                        ? "GSM"
                        : "BSM",
                email: userData.email,
                admissionYear: Number(userData.admissionYear),
                name: userData.name,
                userID: userData.userID,
                password: userData.password,
                githubID: userData.githubID,
            });
        }
    };

    return (
        <AuthLayout position="right">
            <div>
                <S.Title>
                    <BodyLarge>Sign In</BodyLarge>
                    <S.ArrowContainer>
                        {pageNum !== 1 && (
                            <S.BackArrow
                                src={LeftArrow}
                                onClick={() => setPageNum(pageNum - 1)}
                            />
                        )}
                        <TitleLarge>회원가입</TitleLarge>
                    </S.ArrowContainer>
                </S.Title>
                {pageNum === 1 && (
                    <S.InputContainer>
                        <S.DropContainer>
                            <BodyLarge>학교</BodyLarge>
                            <Dropdown
                                items={schoolSelect}
                                describe="학교"
                                val={userSchool}
                                setVal={setUserSchool}
                                width="100%"
                            />
                        </S.DropContainer>
                        <Input
                            type="number"
                            title="입학연도"
                            width="100%"
                            placeholder="재학중이거나 졸업한 학교를 입력해 주세요"
                            name="admissionYear"
                            onChange={onChange}
                            min={2015}
                            max={now.getFullYear()}
                        />
                        <Input
                            type="email"
                            title="학교 이메일"
                            width="100%"
                            placeholder="학교 전용 이메일을 입력해 주세요"
                            name="email"
                            txtBtn="이메일 인증하기"
                            onClick={() => {
                                if (!emailSend) {
                                    alertInfo("이메일 전송중입니다.", 1500);
                                    setEmailSend(true);
                                    sendEmailMutate({ email: userData.email });
                                }
                            }}
                            onChange={onChange}
                        />
                        <Input
                            type="string"
                            title="인증번호"
                            width="100%"
                            placeholder="학교 이메일로 보내진 인증번호를 입력해 주세요"
                            name="code"
                            onChange={onChange}
                        />
                    </S.InputContainer>
                )}
                {pageNum === 2 && (
                    <S.InputContainer>
                        <Input
                            type="string"
                            title="이름"
                            width="100%"
                            placeholder="실명을 입력해 주세요"
                            name="name"
                            onChange={onChange}
                        />
                        <Input
                            type="string"
                            title="아이디"
                            width="100%"
                            placeholder="아이디를 입력해 주세요"
                            name="userID"
                            onChange={onChange}
                        />
                        <Input
                            type="password"
                            title="비밀번호"
                            width="100%"
                            placeholder="영·숫자·기호 포함 8자 이상"
                            name="password"
                            onChange={onChange}
                        />
                        <Input
                            type="url"
                            title="GitHub"
                            width="100%"
                            placeholder="Github 아이디를 입력해 주세요"
                            name="githubID"
                            onChange={onChange}
                        />
                    </S.InputContainer>
                )}
                <S.SubmitContainer>
                    {pageNum === 1 && (
                        <div>
                            <Body2>회원이신가요?</Body2>
                            <BodyStrong onClick={() => router("/login")}>
                                로그인
                            </BodyStrong>
                        </div>
                    )}
                    <Button
                        height="48px"
                        value={pageNum === 1 ? "다음" : "회원가입"}
                        onClick={
                            pageNum === 1
                                ? () => onClickPage()
                                : () => onClickSignUp()
                        }
                        disabled={!userData.emailCode}
                    />
                </S.SubmitContainer>
            </div>
        </AuthLayout>
    );
};

export default EnRolledSignup;
