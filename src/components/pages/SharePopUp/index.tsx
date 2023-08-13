import * as S from './style'
import { useState } from 'react';
import { Close } from '@assets/images/icon/Close';
import { ContentPaste } from '@assets/images/icon/ContentPaste';
import { color } from '@styles/theme.style';
import { useLocation } from 'react-router-dom';
import Modal from '@components/common/modal';
import { alertError, alertSuccess } from '@utils/toastify';

interface PropTypes {
    setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUp = ({ setShowPopUp }:PropTypes) => {
    const location = window.document.location.href;
    const [isHovered, setIsHovered] = useState(false);
    const handleCopyClipBoard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(location);
            setShowPopUp(false);
            alertSuccess('복사 성공!');
        } catch (error) {
            alertError('복사 실패!');
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
        

    return (  
        <Modal setVal={setShowPopUp}>
            <S.PopUpInfo>
                <S.PopUpText>
                    <S.PopUpTitle>공유하기</S.PopUpTitle>   
                    <S.PopUpSmalltalk>이 게시글을 다른 사람들과 공유해보세요</S.PopUpSmalltalk>
                </S.PopUpText>   
                <S.Close 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} 
                    onClick={() => {
                        setShowPopUp(false);
                    }}
                >
                    <Close
                        fill={isHovered ? color.grayLight2 : color.black}
                    /> 
                </S.Close>
            </S.PopUpInfo>
            <S.Share>
                <S.Url>
                    <div>링크</div>
                    <div>{location}</div>
                </S.Url>    
                <ContentPaste 
                width="24px" 
                fill={color.grayDark1} 
                onClick={() => handleCopyClipBoard('복사된 텍스트')}
                />
            </S.Share>     
        </Modal>
    );
}
 
export default PopUp;