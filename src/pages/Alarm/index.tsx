import AppLayout from "@layouts/AppLayout";
import Dummy from "@fixtures/alarm.json";
import * as S from "./style";
import Notify from "@components/pages/Alarm/Notify";
import TitlePath from "@components/common/TitlePath";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { alertError } from "@utils/toastify";

const Alarm = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        alertError("현재 사용이 불가능한 페이지입니다.")
        navigate("/")
    },[])
    
    return (
        <>
            <TitlePath title="알림" path="User > 알림" />
            <S.AlarmContainer>
                <S.Content>
                    {Dummy.post.map((post) => (
                        <Notify
                            id={post.id}
                            title={post.title}
                            date={post.date}
                            time={post.time}
                            to=""
                        />
                    ))}
                </S.Content>
            </S.AlarmContainer>
        </>
    );
};

export default Alarm;
