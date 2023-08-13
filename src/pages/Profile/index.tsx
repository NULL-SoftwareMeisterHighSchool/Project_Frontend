import TitlePath from "@components/common/TitlePath";
import * as S from "./style";
import BlogPost from "@components/pages/SkillBlog/BlogPost";
import StackName from "@components/pages/Mypage/Stack";
import Post from "@components/common/Post";
import { BodyStrong } from "@styles/text.style";
import { SkillBlogDefaultImg } from "@assets/images/allfiles";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { delCookie } from "@utils/cookies";
import { useRecoilState, useSetRecoilState } from "recoil";
import { profileIdAtom, profileNameAtom } from "@atoms/profile";
import useDate from "@hooks/useDate";
import { getUser } from "@apis/users";
import UserIcon from "@components/common/UserIcon";
import UpdateProfile from "@components/pages/Mypage/UpdateProfile";
import { useNavigate, useParams } from "react-router-dom";
import { USERDATATYPE } from "../../types/profile";
import { alertSuccess } from "@utils/toastify";


const Mypage = () => {
    const navigate = useNavigate();
    const [updateProfileOpen, setUpdateProfileOpen] = useState(false);
    const [myId, setMyId] = useRecoilState(profileIdAtom);
    const setMyName = useSetRecoilState(profileNameAtom);
    const { id } = useParams();
    const [userData, setUserData] = useState<USERDATATYPE>({
        name: "",
        email: "",
        bio: "",
        githubID: "",
        portfolioURL: "",
        stacks: [],
        articles: {
            general: [],
            tech: [],
        },
    });

    const Authority = () => {
        if (String(myId) === id) {
            return (
                <S.BtnArea>
                    <S.Btn
                        onClick={() => {
                            delCookie("refreshToken", { path: "/" });
                            delCookie("accessToken", { path: "/" });
                            setMyId("")
                            setMyName("")
                            alertSuccess("로그아웃");
                            navigate('/');
                        }}
                    >
                        <BodyStrong>로그아웃</BodyStrong>
                    </S.Btn>
                    <S.Btn onClick={() => setUpdateProfileOpen(true)}>
                        <BodyStrong>프로필 수정</BodyStrong>
                    </S.Btn>
                </S.BtnArea>
            );
        }
    };

    const { articles, name, email, ...changeUserData } = userData;
    const { refetch } = useQuery("getUser", ()=>getUser(id), {
        onSuccess: (res) => {
            setUserData(res.data);
        },
        onError: () => {
            console.log("Error");
        },
        enabled: false,
    });
    useEffect(() => {
        refetch();
    }, []);

    return (
        <>
            <TitlePath title={`${String(myId) === id ? "마이":userData.name} 페이지`} path="Menu > 프로필" />
            <UpdateProfile
                refetch={refetch}
                val={updateProfileOpen}
                setVal={setUpdateProfileOpen}
                userData={changeUserData}
            />
            <S.MypageContainer>
                <S.User>
                    <div>
                        <S.UserSection>
                            <UserIcon backWidth="80px" iconWidth={44} />
                            <S.UserIntro>
                                <S.UserContectInfo>
                                    <S.UserName>{userData.name}</S.UserName>
                                    <S.UserContect>
                                        {userData.email}
                                    </S.UserContect>
                                </S.UserContectInfo>
                                <S.UserDescript>{userData.bio}</S.UserDescript>
                            </S.UserIntro>
                        </S.UserSection>
                        <S.UserContectSection>
                            <S.UserContectInfo>
                                <S.UserContectTitle>
                                    portfolio
                                </S.UserContectTitle>
                                <S.UserContect>
                                    {userData.portfolioURL}
                                </S.UserContect>
                            </S.UserContectInfo>
                            <S.UserContectInfo>
                                <S.UserContectTitle>Github</S.UserContectTitle>
                                <S.UserContect>
                                    {userData.githubID}
                                </S.UserContect>
                            </S.UserContectInfo>
                        </S.UserContectSection>
                    </div>
                    {Authority()}
                </S.User>
                <S.Stack>
                    {userData.stacks.map((v) => (
                        <StackName>{v}</StackName>
                    ))}
                </S.Stack>
                <S.Blog>
                    <S.SubTitle>내가 작성한 블로그</S.SubTitle>
                    <S.BlogContainer>
                        {userData.articles.tech.map((data) => (
                            <BlogPost
                                key={data.id}
                                id={data.id}
                                name={data.author.name}
                                summary={data.title}
                                titleImg={
                                    data.thumbnail === ""
                                        ? SkillBlogDefaultImg
                                        : ""
                                }
                                date={useDate(data.createdAt).date}
                                to={"/blogdetail/" + data.id}
                                likes={data.likes}
                                views={data.views}
                            />
                        ))}
                    </S.BlogContainer>
                </S.Blog>
                <S.Post>
                    <S.SubTitle>내가 작성한 게시물</S.SubTitle>
                    <S.PostContainer>
                        {userData.articles.general.map((post) => (
                            <Post
                                id={post.id}
                                title={post.title}
                                name={post.author.name}
                                date={useDate(post.createdAt).date}
                                to={"/blogdetail/" + post.id}
                            />
                        ))}
                    </S.PostContainer>
                </S.Post>
            </S.MypageContainer>
        </>
    );
};

export default Mypage;
