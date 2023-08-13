import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import * as S from "./style";
import { postWrite } from "@apis/article";
import Toast from "@components/pages/WriteBoard/Toast";
import { articleTypeAtom } from "@atoms/articleType";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from "recoil";
import { alertError, alertSuccess } from "@utils/toastify";
import { profileIdAtom } from "@atoms/profile";
import { useNavigate } from "react-router-dom";
import { getCookie } from "@utils/cookies";

const WriteBoard = () => {
    const [title, setTitle] = useState("");
    const type = useRecoilValue(articleTypeAtom);
    const [content, setContent] = useState("");
    const { mutate: writeMutate } = useMutation(postWrite, {
        onSuccess: () => {
            alertSuccess("글 작성에 성공했습니다.");
            window.location.href = "/";
        },
        onError: () => {
            alertError("글 작성 실패했습니다.");
        },
    });
    const myid = useRecoilValue(profileIdAtom);
    const navigate = useNavigate();

    useEffect(() => {
        if (!myid) {
            alertError("로그인 후 이용 가능합니다.");
            navigate("/login");
        }
    }, []);

    return (
        <>
            <S.Header>
                <S.STitle>
                    {type == "GENERAL" ? "게시판 글쓰기" : "기술 블로그 글쓰기"}
                </S.STitle>
                <S.Post
                    onClick={() => {
                        writeMutate({ title, type, content });
                    }}
                >
                    글 게시하기
                </S.Post>
            </S.Header>
            <S.TitleInput
                placeholder="제목을 입력해주세요"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setTitle(e.target.value)
                }
            />
            <Toast content={content} setContent2={setContent} />
        </>
    );
};

export default WriteBoard;
