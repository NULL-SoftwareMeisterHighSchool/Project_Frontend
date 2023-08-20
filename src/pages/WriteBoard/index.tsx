import React, { useEffect, useState } from "react";
import Button from "@components/common/Button";
import { useMutation } from "react-query";
import * as S from "./style";
import { postWrite } from "@apis/article";
import Toast from "@components/pages/WriteBoard/Toast";
import { articleTypeAtom } from "@atoms/articleType";
import { useRecoilValue } from "recoil";
import { alertError, alertSuccess } from "@utils/toastify";
import { useNavigate } from "react-router-dom";
import { getCookie } from "@utils/cookies";

const WriteBoard = () => {
    const [title, setTitle] = useState("");
    const type = useRecoilValue(articleTypeAtom);
    const [content, setContent] = useState("");
    const[content2, ] = useState("");
    const [isPrivate, setPrivate] = useState(false);
    const navigate = useNavigate();

    const { mutate: writeMutate } = useMutation(postWrite, {
        onSuccess: () => {
            alertSuccess("글 작성에 성공했습니다.");
            navigate("/")
        },
        onError: () => {
            alertError("글 작성 실패했습니다.");
        },
    });
    const refreshCookie = getCookie("refreshToken")

    useEffect(() => {
        if (!refreshCookie) {
            alertError("로그인 후 이용 가능합니다.");
            navigate("/login");
        }
    }, []);

    return (
        <>
            <S.Header>
                <S.STitle>
                    {type == "GENERAL" ? "게시판 글쓰기" : type == "TECH" ? "기술 블로그 글쓰기" : "자기소개 글쓰기"}
                </S.STitle>
                <S.Button>
                    <Button
                        state="GRAY"
                        value="임시저장"
                        onClick={() => {
                            setPrivate(true);
                            writeMutate({ title, type, content, isPrivate });
                        }}
                    />
                    <Button
                        value="글 게시하기"
                        onClick={() => {
                            writeMutate({ title, type, content, isPrivate });
                        }}
                    />
                </S.Button>
            </S.Header>
            <S.TitleInput
                placeholder="제목을 입력해주세요"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setTitle(e.target.value)
                }
                maxLength={20}
            />
            <Toast content={content2} setContent2={setContent} />
        </>
    );
};

export default WriteBoard;
