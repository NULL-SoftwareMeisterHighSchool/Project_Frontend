import * as S from './style'
import { useState } from 'react';
import { Close } from '@assets/images/icon/Close';
import { color } from '@styles/theme.style';
import Post from '@components/common/Post';
import Modal from '@components/common/modal';

interface PropTypes {
    setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const TempWrite = ({ setShowPopUp }:PropTypes) => {
    const [isHovered, setIsHovered] = useState(false);

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
                {userData.articles.general.map((post) => (
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