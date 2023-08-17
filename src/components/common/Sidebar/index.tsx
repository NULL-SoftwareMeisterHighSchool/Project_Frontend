import * as S from "./style";

import { color } from "@styles/theme.style";

import { Option } from "./Option";

import { Menu } from "@assets/images/icon/Menu";
import { BulletinBoard } from "@assets/images/icon/BulletinBoard";
import { Computer } from "@assets/images/icon/Computer";
import { Trophy } from "@assets/images/icon/Trophy";
import { User } from "@assets/images/icon/User";
import { Setting } from "@assets/images/icon/Setting";
import { Edit } from "@assets/images/icon/Edit";
import { Dehaze } from "@assets/images/icon/Dhaze";
import WritePopUp from "@components/common/WritePopUp";
import UserIcon from "@components/common/UserIcon";
import { useRecoilState, useSetRecoilState } from "recoil";
import { profileIdAtom, profileNameAtom } from "@atoms/profile"
import { SetStateAction, useCallback, useEffect, useState, useRef } from "react";
import { useQuery } from "react-query";
import { getUserMeTiny } from "@apis/users";
import { useNavigate } from "react-router-dom";
import { BodyStrong } from "@styles/text.style";
import { sidebarAtom } from "@atoms/sidebar";

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState (false) ;
    const [category, setCategory] = useRecoilState(sidebarAtom);
    const [showPopUp, setShowPopUp] = useState<boolean>(false);
    const outside = useRef<HTMLElement>(null);
    const onSelect = useCallback(
        (category: SetStateAction<string>) => setCategory(category),
        []
    );
    const [userData, setUserData] = useState({ id: 0, name: "" });
    const [myId, setMyId] = useRecoilState(profileIdAtom);
    const setMyName = useSetRecoilState(profileNameAtom);

    const navigate = useNavigate();

    const { refetch } = useQuery("getUserMeTiny", getUserMeTiny, {
        onSuccess: (res) => {
            setUserData(res.data);
            setMyId(res.data.id);
            setMyName(res.data.name)
        },
        onError: () => {
            console.log("Error");
        },
        enabled: false,
    });

    useEffect(() => {
        refetch();
    }, []);

    const handlerOutsie = (e: React.ChangeEvent<HTMLElement>) => {
        if (outside.current &&!outside.current.contains(e.target)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handlerOutsie as unknown as EventListener);
        return () => {
            document.removeEventListener('mousedown', handlerOutsie as unknown as EventListener);
        };
    });

    return (
        <S.Container>
            <S.Bar className={isOpen ? "open" : ""} ref={outside}>
                {myId ? (
                    <>
                        <S.User>
                            <UserIcon backWidth="36px" iconWidth={20} />
                            <span>{userData.name}</span>
                        </S.User>
                        <S.Write onClick={() => setShowPopUp(true)}>
                            <Edit width={24} fill={color.grayDark1} />
                            <S.WriteText>글쓰기</S.WriteText>
                        </S.Write>
                    </>
                ) : (
                    <S.LoginBtn onClick={() => navigate("/login")}>
                        <BodyStrong>로그인</BodyStrong>
                    </S.LoginBtn>
                )}
                <S.Line />

                <S.Menu>
                    <S.Subtitle>Menu</S.Subtitle>
                    <Option
                        to="/"
                        pagename="메인"
                        category={category}
                        onSelect={onSelect}
                        setIsOpen={setIsOpen}
                    >
                        <Menu width={24} fill={color.white} />
                    </Option>
                    <Option
                        to="/blog"
                        pagename="게시판"
                        category={category}
                        onSelect={onSelect}
                        setIsOpen={setIsOpen}
                    >
                        <BulletinBoard width={24} />
                    </Option>
                    <Option
                        to="/skill"
                        pagename="기술 블로그"
                        category={category}
                        onSelect={onSelect}
                        setIsOpen={setIsOpen}
                    >
                        <Computer width={24} />
                    </Option>
                    <Option
                        to="/ranking"
                        pagename="랭킹"
                        category={category}
                        onSelect={onSelect}
                        setIsOpen={setIsOpen}
                    >
                        <Trophy width={24} />
                    </Option>
                </S.Menu>
                {myId && (
                    <S.Menu>
                        <S.Subtitle>User</S.Subtitle>
                        {/* <Option
                            to="/alarm"
                            pagename="알림"
                            category={category}
                            onSelect={onSelect}
                        >
                            <Alarm width={24} />
                        </Option> */}
                        <Option
                            to={"/profile/"+userData.id}
                            pagename="마이페이지"
                            category={category}
                            onSelect={onSelect}
                            setIsOpen={setIsOpen}
                        >
                            <User width={24} />
                        </Option>
                        <Option
                            to="/setting"
                            pagename="설정"
                            category={category}
                            onSelect={onSelect}
                            setIsOpen={setIsOpen}
                        >
                            <Setting width={24} />
                        </Option>
                        {/* <Option to='/' pagename='개발자 소개' category={category} onSelect={onSelect}><Infomation width={24} /></Option> */}
                    </S.Menu>
                )}
            </S.Bar>
            <S.Dehaze onClick={()=>{
                setIsOpen(true);
                console.log(isOpen);
            }}>
                <Dehaze width={28} height={28} />
            </S.Dehaze>
            {showPopUp ? <WritePopUp setShowPopUp={setShowPopUp} /> : null}
        </S.Container>
    );
};
