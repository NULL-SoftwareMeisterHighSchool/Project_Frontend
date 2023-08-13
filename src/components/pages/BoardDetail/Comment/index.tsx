import UserIcon from "@components/common/UserIcon";
import { More } from "@assets/images/icon/More";
import { Delete } from "@assets/images/icon/Delete";
import { CommentStateType } from "./comment.type";
import { deleteComment } from "@apis/article";
import { useMutation } from "react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { profileIdAtom } from "@atoms/profile";

import Modal from "@components/common/modal";
import * as S from "./style";
import { alertError, alertSuccess } from "@utils/toastify";
import { color } from "@styles/theme.style";

export interface ComentType {
  authorId: number; 
  commentID: number;
  username: string;
  content: String;
  func: ()=>void;
  date: String;
  time: String;
  to: any;
  state?: CommentStateType;
}

const Comment = ({
  authorId,
  commentID,
  username,
  content,
  func,
  date,
  time,
  to,
  state = "COMMENT",
}: ComentType) => {
  const { id } = useParams();
  const myId = useRecoilValue(profileIdAtom);
  const [commentOpen, setCommentOpen] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const { mutateAsync: deleteCommentMutate } = useMutation(deleteComment, {
    onSuccess: ()=>{
      alertSuccess("댓글 삭제 성공헀습니다.");
      setCommentOpen(false);
      setModal(false);
      func();
    },
    onError: ()=>{
      alertError("댓글 삭제 실패했습니다.");
      setCommentOpen(false);
      setModal(false);
    },
  });

  return (
    <>
      {commentOpen && (
        <Modal setVal={setCommentOpen}>
          <S.UseTitleContainer>
            <S.UserTitle>정말로 댓글을 삭제하실건가요?</S.UserTitle>
            <S.UserSubTitle>삭제한 댓글은 되돌릴 수 없어요.</S.UserSubTitle>
          </S.UseTitleContainer>
          <S.UserBtnContainer>
            <button onClick={()=>{
              setCommentOpen(false);
            }}>취소</button>
            <button onClick={()=>{
              deleteCommentMutate({id, commentID});
            }}>댓글 삭제하기</button>
          </S.UserBtnContainer>
        </Modal>
      )}
      <S.Comment state={state}>
        <S.CommentContents>
          <UserIcon
            backWidth="40px"
            iconWidth={22}
            onClick={() => {
              window.location.replace(to);
            }}
          />
          <S.Row>
            <S.Column>
              <S.CommentName
                onClick={() => {
                  window.location.replace(to);
                }}
              >
                {username}
              </S.CommentName>
              <S.CommentContent>{content}</S.CommentContent>
            </S.Column>
            {
              Number(myId) === authorId &&
                <div
                onClick={() => {
                  // {
                  //   modal ? setModal(false) : setModal(true);
                  // }
                  setCommentOpen(true)
                }}
              >
                {/* <More /> */}
                <Delete fill={color.grayDark1} width={20}/>
              </div> 
            }
          </S.Row>
          {/* {modal && (
            <S.CommentDelet onClick={()=>{
                setCommentOpen(true);
            }}>
              <Delete />
              <S.CommentDeletText>댓글 삭제하기</S.CommentDeletText>
            </S.CommentDelet>
          )} */}
        </S.CommentContents>
        <S.CommentInfo>
          <S.CommentInfoText>{date}</S.CommentInfoText>
          <S.CommentInfoText>{time}</S.CommentInfoText>
        </S.CommentInfo>
      </S.Comment>
    </>
  );
};

export default Comment;
