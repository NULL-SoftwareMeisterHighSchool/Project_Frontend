import Button from "@components/common/Button";
import * as S from "./style";
import Input from "@components/common/Input";
import { useMutation } from 'react-query';
import { postComment } from '@apis/article';
import { useState } from "react";
import { alertError, alertSuccess } from "@utils/toastify";

type Props = {
    id: string | undefined;
    func: ()=>void;
}

const CommentWrite = ({
    id,
    func
}:Props) => {
    const [ body, setBody ] = useState('');
    const { mutateAsync: commentMutate } = useMutation(postComment, {
        onSuccess: () => {
          console.log("Success");
          alertSuccess("댓글 작성 성공헸습니다.");
          setBody("");
          func();
        },
        onError: () => {
          alertError('댓글 작성 실패했습니다.');
        }
      });
      
    return (  
        <S.CommentInfo>
            <S.InputBtnContainer>
                <div>
                    <Input 
                    title="댓글 작성" 
                    width="100%" 
                    placeholder="댓글 내용을 입력해 주세요"
                    onChange={(e)=>{setBody(e.target.value)}}
                    value={body}
                    onKeyDown={(e)=>{
                        if (e.key === "Enter" && !e.shiftKey && body.length > 0) {
                            e.preventDefault();
                            commentMutate({ id, body });
                        }
                    }}/>
                </div>
                <Button 
                value="댓글 작성"
                onClick={
                    ()=>{
                        if(body.length > 0){
                            commentMutate({ id, body });
                        }
                    }
                }
                disabled={body.length < 0 ? true : false}
                />
            </S.InputBtnContainer>
        </S.CommentInfo>
    );
}
 
export default CommentWrite;