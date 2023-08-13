import * as S from './style'
import { useRef, useState } from 'react';
import { Close } from '@assets/images/icon/Close';
import { Article } from '@assets/images/icon/Article';
import { SkillArticle } from '@assets/images/icon/SkillArticle';
import { color } from '@styles/theme.style';
import Modal from '@components/common/modal';
import Option from './Option';
import { useSetRecoilState } from "recoil";
import { articleTypeAtom } from '@atoms/articleType';

interface PropTypes {
    setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const WritePopUp = ({ setShowPopUp }:PropTypes) => {
    const setArticleType = useSetRecoilState(articleTypeAtom);
    const [isHovered, setIsHovered] = useState(false);

    return (  
        <Modal setVal={setShowPopUp}>
            <S.PopUpInfo>
                <S.PopUpText>
                    <S.PopUpTitle>글 쓰기</S.PopUpTitle>   
                    <S.PopUpSmalltalk>어떤 글쓰기를 하실건가요?</S.PopUpSmalltalk>
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
            <S.OpitonInfo>
                <Option icon={<Article/>} to='/write' optionName='게시판 글쓰기' onClick={
                    ()=>{
                        setArticleType("GENERAL");
                    }
                }/>  
                <Option icon={<SkillArticle/>} to='/write' optionName='기술 블로그 글쓰기' onClick={
                    ()=>{
                        setArticleType("TECH");
                    }
                }/>    
            </S.OpitonInfo>         
        </Modal>
    );
}
 
export default WritePopUp;