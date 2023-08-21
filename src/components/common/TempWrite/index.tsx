import * as S from './style'
import { useEffect, useState } from 'react';
import { Close } from '@assets/images/icon/Close';
import { color } from '@styles/theme.style';
import Post from '@components/common/Post';
import { useQuery } from 'react-query';
import { getTempWrite } from '@apis/users';
import Modal from '@components/common/modal';
import { alertError } from "@utils/toastify";
import UseDate from '@hooks/useDate';

interface PropTypes {
    setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

type ArticlesTypes = {
    id: number;
    title: string;
    thumbnail: string;
    summary: string;
    author: {
        id: number;
        name: string;
    };
    createdAt: string;
    likes: number;
    views: number;
}

const TempWrite = ({ setShowPopUp }:PropTypes) => {
    const [isHovered, setIsHovered] = useState(false);
    const [tempArticle, setTempArticle] = useState<ArticlesTypes[]>([]);
    const { refetch } = useQuery("getTempWrite", ()=>getTempWrite(),{
        onSuccess: (res)=>{
            setTempArticle(res.data.articles);
        },
        onError: ()=>{
            alertError("임시 저장된 글을 가져올 수 없습니다.");
        }
    });

    useEffect(()=>{
        refetch
    },[]);

    return (  
        <Modal setVal={setShowPopUp}>
            <S.PopUpInfo>
                <S.PopUpText>
                    <S.PopUpTitle>임시 저장된 글</S.PopUpTitle>   
                </S.PopUpText>   
                <S.Close 
                    onMouseEnter={
                        ()=>{setIsHovered(true);
                    }}
                    onMouseLeave={
                        ()=>{setIsHovered(false);
                    }} 
                    onClick={() => {
                        setShowPopUp(false);
                    }}
                >
                    <Close
                        fill={isHovered ? color.grayLight2 : color.black}
                    /> 
                </S.Close>
            </S.PopUpInfo>
            <S.Content>
                {tempArticle.map((post) => (
                    <Post
                        id={post.id}
                        title={post.title}
                        name={post.author.name}
                        date={UseDate(post.createdAt).date}
                        to={"/blogdetail?id=" + post.id}
                    />
                ))}
            </S.Content>         
        </Modal>
    );
}
 
export default TempWrite;
