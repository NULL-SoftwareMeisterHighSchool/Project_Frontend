import * as S from "./style";

import UserSetting from "@components/pages/Setting/UserSetting.tsx";
import { Infomation } from "@assets/images/icon/Infomation";
import { color } from "@styles/theme.style";
import { Lock } from "@assets/images/icon/Lock";
import { Mail } from "@assets/images/icon/Mail";
import { RemoveCircle } from "@assets/images/icon/RemoveCircle";
import { useEffect, useState } from "react";
import Modal from "@components/common/modal";
import TitlePath from "@components/common/TitlePath";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { delMeWithdraw } from "@apis/users";
import { delCookie } from "@utils/cookies";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { profileIdAtom } from "@atoms/profile";
import { alertError } from "@utils/toastify";

const Setting = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const setProfileIdAtom = useSetRecoilState(profileIdAtom);


    const {mutate:meWithdraw} = useMutation(delMeWithdraw,{
        onSuccess:()=>{
            delCookie("accessToken",{path:"/"})
            delCookie("refreshToken",{path:"/"});
            setProfileIdAtom("")
            navigate('/');
        },
        onError:()=>{
            alertError("회원 탈퇴에서 에러가 발생했습니다.")
        }
    })


    const myid = useRecoilValue(profileIdAtom);

    useEffect(()=>{
        if (!myid) {
            alertError("로그인 후 이용 가능합니다.");
            navigate("/login");
        }
    },[])

    return (
        <>
            <TitlePath title="설정" path="User > 설정" />
            {modalOpen && (
                <Modal setVal={setModalOpen}>
                    <S.UseTitleContainer>
                        <S.UserTitle>정말로 탈퇴하실건가요?</S.UserTitle>
                        <S.UserSubTitle>
                            탈퇴하면 지금까지 활동한 기록들을 복구할 수 없어요.
                        </S.UserSubTitle>
                    </S.UseTitleContainer>
                    <S.UserBtnContainer>
                        <button onClick={()=>setModalOpen(false)}>취소</button>
                        <button onClick={()=>{
                            if(confirm("진짜 탈퇴하시겠습니까??")){
                                meWithdraw();
                            }else{
                                setModalOpen(false)
                            }
                        }}>회원 탈퇴 하기</button>
                    </S.UserBtnContainer>
                </Modal>
            )}
            <S.Container>
                <UserSetting
                    title="비밀번호 변경"
                    icon={
                        <Lock width={24} height={24} fill={color.primaryBase} />
                    }
                    colorType={color.black}
                    onClick={() => {navigate('/pwchange')}}
                />
                {/* <UserSetting
                    title="이메일 변경"
                    icon={
                        <Mail width={24} height={24} fill={color.primaryBase} />
                    }
                    colorType={color.black}
                    onClick={() => {}}
                /> */}
                <UserSetting
                    title="개인정보 처리방침"
                    icon={
                        <Infomation
                            width={24}
                            height={24}
                            fill={color.grayDark1}
                        />
                    }
                    colorType={color.grayDark1}
                    onClick={() => {
                        navigate('/개인정보처리방침')
                    }}
                />
                <UserSetting
                    title="회원 탈퇴"
                    icon={
                        <RemoveCircle
                            width={24}
                            height={24}
                            fill={color.critical}
                        />
                    }
                    colorType={color.critical}
                    onClick={() => setModalOpen(true)}
                />
            </S.Container>
        </>
    );
};

export default Setting;
