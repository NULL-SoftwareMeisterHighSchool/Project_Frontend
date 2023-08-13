import React, { useEffect, useState } from "react";
import { color } from "@styles/theme.style";
import { useParams } from "react-router-dom";
import { Favorite } from "@assets/images/icon/Favorite";
import { ChatBubble } from "@assets/images/icon/ChatBubble";
import { Share } from "@assets/images/icon/Share";
import { Eye } from "@assets/images/icon/Eye";
import { Edit } from "@assets/images/icon/Edit";
import { Delete } from "@assets/images/icon/Delete";
import Modal from "@components/common/modal";
import SharePopUp from "@components/pages/SharePopUp";
import UserIcon from "@components/common/UserIcon";
import CommentWrite from "@components/pages/BoardDetail/CommentWrite";
import Comment from "@components/pages/BoardDetail/Comment";
import * as S from "./style";
import { useMutation, useQuery } from "react-query";
import { getboardDetail, postLike, deleteBlog } from "@apis/article";
import { articleIdAtom } from "@atoms/articleId";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import useDate from "@hooks/useDate";
import { alertError, alertSuccess } from "@utils/toastify";
import { BLOGDETAILTYPE } from "../../types/blog";

const BoardDetail = () => {
    const View = React.lazy(
        () => import("../../components/pages/BoardDetail/Viewer")
    );
    const { id } = useParams();
    const navigate = useNavigate();
    const setBlogId = useSetRecoilState(articleIdAtom);
    const [showPopUp, setShowPopUp] = useState<boolean>(false);
    const [blogOpen, setBlogOpen] = useState<boolean>(false);
    const [data, setdata] = useState<BLOGDETAILTYPE>({
        title: "",
        views: 0,
        likes: 0,
        body: "",
        createdAt: "",
        author: {
            id: 0,
            name: "",
        },
        isLiked: false,
        isAuthor: false,
        commentCount: 0,
        comments: [],
    });

    const { mutateAsync: deleteBlogMutate } = useMutation(deleteBlog,{
        onSuccess: ()=>{
            alertSuccess("게시물이 삭제되었습니다.");
            navigate("/");
        },
        onError: ()=>{
            alertError("게시물 삭제에 실패했습니다.");
        }
    });

    const { refetch } = useQuery("getBlogDetail", () => getboardDetail(id), {
        onSuccess: (res) => {
            setdata(res.data);
        },
        onError: () => {
            console.log("Error");
        },
        enabled: false,
    });

    const { mutateAsync: likeMutate } = useMutation(postLike, {
        onSuccess: () => {
            console.log("Success");
            refetch();
        },
        onError: () => {
            console.error("Error");
        },
    });

    useEffect(() => {
        refetch();
        setBlogId(String(id));
    }, []);

    return (
        <>
            {showPopUp && <SharePopUp setShowPopUp={setShowPopUp} />}
            {blogOpen && (
                <Modal setVal={setBlogOpen}>
                    <S.UseTitleContainer>
                        <S.UserTitle>
                            정말로 게시글을 삭제하실건가요?
                        </S.UserTitle>
                        <S.UserSubTitle>
                            삭제한 게시글은 되돌릴 수 없어요.
                        </S.UserSubTitle>
                    </S.UseTitleContainer>
                    <S.UserBtnContainer>
                        <button
                            onClick={() => {
                                setBlogOpen(false);
                            }}
                        >
                            취소
                        </button>
                        <button
                            onClick={() => {
                                deleteBlogMutate(id);
                                setBlogOpen(false);
                            }}
                        >
                            게시글 삭제하기
                        </button>
                    </S.UserBtnContainer>
                </Modal>
            )}
            <>
                <S.Post>
                    <S.Thumbnail>
                        <S.PostTitle>{data.title}</S.PostTitle>
                        <S.Profile>
                            <UserIcon backWidth="48px" iconWidth={26} />
                            <S.ProfileInfo>
                                <S.Name>{data.author.name}</S.Name>
                                <S.Date>{useDate(data.createdAt).date}</S.Date>
                            </S.ProfileInfo>
                        </S.Profile>
                    </S.Thumbnail>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <View content={data.body} />
                    </React.Suspense>
                    <S.Line />
                    <S.IconSection>
                        <S.Icons>
                            <S.IconPointer
                                onClick={() => {
                                    likeMutate(id);
                                }}
                            >
                                {data.isLiked ? (
                                    <Favorite
                                        fill={color.critical}
                                        width="24px"
                                    />
                                ) : (
                                    <Favorite
                                        fill={color.grayBase}
                                        width="24px"
                                    />
                                )}
                                {data.likes}
                            </S.IconPointer>
                            <S.IconInfo>
                                <ChatBubble
                                    fill={color.grayBase}
                                    width="24px"
                                />
                                {data.commentCount}
                            </S.IconInfo>
                        </S.Icons>
                        <S.Icons>
                            <S.IconInfo>
                                <Eye fill={color.grayDark1} width="24px" />
                                <S.IconText>{data.views}</S.IconText>
                            </S.IconInfo>
                            <S.IconPointer onClick={() => setShowPopUp(true)}>
                                <Share fill={color.grayDark1} width="24px" />
                            </S.IconPointer>
                            {data.isAuthor ? (
                                <>
                                    <S.UpdateIcon to={"/updateblog/" + id}>
                                        <Edit
                                            fill={color.primaryBase}
                                            width="24px"
                                        />
                                        <S.UpdateText fill={color.primaryBase}>
                                            게시글 수정하기
                                        </S.UpdateText>
                                    </S.UpdateIcon>
                                    <S.DeleteIcon
                                        onClick={() => {
                                            setBlogOpen(true);
                                        }}
                                    >
                                        <Delete
                                            fill={color.critical}
                                            width="24px"
                                        />
                                        <S.UpdateText
                                            fill={color.critical}
                                            style={{ cursor: "pointer" }}
                                        >
                                            게시글 삭제하기
                                        </S.UpdateText>
                                    </S.DeleteIcon>
                                </>
                            ) : (
                                ""
                            )}
                        </S.Icons>
                    </S.IconSection>
                    <CommentWrite id={id} func={refetch} />
                    <S.Comment>
                        {data.comments.map((post, index) => (
                            <Comment
                                key={index}
                                authorId={post.author.id}
                                commentID={post.commentID}
                                username={post.author.name}
                                content={post.content}
                                to={"/profile/" + post.author.id}
                                date={useDate(post.createdAt).date}
                                time={useDate(post.createdAt).time}
                                func={refetch}
                            />
                        ))}
                    </S.Comment>
                    {/* <S.Line />
          <S.WhatFollows>이어지는 글</S.WhatFollows>
          <S.Board>
            {
                Dummy.post.map(
                  post => (
                    <Post id={post.id} to='/' title={post.title} name={post.name} date={post.date} padding='0px'/>
                  )
                )
            }
            </S.Board> */}
                </S.Post>
            </>
        </>
    );
};

export default BoardDetail;
