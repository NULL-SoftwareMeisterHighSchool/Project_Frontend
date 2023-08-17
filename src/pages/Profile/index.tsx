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
import { getUser } from "@apis/users";
import UserIcon from "@components/common/UserIcon";
import UpdateProfile from "@components/pages/Mypage/UpdateProfile";
import { useLocation, useNavigate } from "react-router-dom";
import { USERDATATYPE } from "../../types/profile";
import { alertError, alertInfo, alertSuccess } from "@utils/toastify";
import UseDate from "@hooks/useDate";

const Mypage = () => {
    const { search } = useLocation();
    const navigate = useNavigate();
    const [updateProfileOpen, setUpdateProfileOpen] = useState(false);
    const [portfolio, setPortfolio] = useState(false);
    const [myId, setMyId] = useRecoilState(profileIdAtom);
    const id = search.split(/[=,&]/)[1];
    const setMyName = useSetRecoilState(profileNameAtom);
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
                            setMyId("");
                            setMyName("");
                            alertSuccess("로그아웃");
                            navigate("/");
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

    const { refetch } = useQuery("getUser", () => getUser(id), {
        onSuccess: (res) => {
            setUserData(res.data);
            if (userData.portfolioURL.indexOf("http") === -1) {
                setPortfolio(false);
            } else {
                setPortfolio(true);
            }
        },
        onError: () => {
            alertError("Error");
        },
        enabled: false,
    });

    useEffect(() => {
        refetch();
    }, [refetch]);

    useEffect(() => {
        refetch();
    }, [id]);
    return (
        <>
            <TitlePath
                title={
                    String(myId) === id
                        ? "마이페이지"
                        : `${userData.name} 페이지`
                }
                path="Menu > 프로필"
            />
            <UpdateProfile
                refetch={refetch}
                val={updateProfileOpen}
                setVal={setUpdateProfileOpen}
                userData={{
                    bio: userData.bio,
                    githubID: userData.githubID,
                    portfolioURL: userData.portfolioURL,
                    stacks: userData.stacks,
                }}
            />
            <S.MypageContainer>
                <S.User>
                    <S.UserBox>
                        <S.UserSection>
                            <UserIcon backWidth="80px" iconWidth={44} />
                            <S.UserIntro>
                                <S.UserContectInfo>
                                    <S.UserName>{userData.name}</S.UserName>
                                    <S.UserLink to={"mailto:" + userData.email}>
                                        <S.UserContect>
                                            {userData.email}
                                        </S.UserContect>
                                    </S.UserLink>
                                </S.UserContectInfo>
                                <S.UserDescript>{userData.bio}</S.UserDescript>
                            </S.UserIntro>
                        </S.UserSection>
                        <S.UserContectSection>
                            <S.UserContectInfo>
                                <S.UserContectTitle>
                                    portfolio
                                </S.UserContectTitle>
                                <S.UserLink
                                    to={userData.portfolioURL}
                                    target="_blank"
                                >
                                    <S.UserContect>
                                        {userData.portfolioURL}
                                    </S.UserContect>
                                </S.UserLink>
                            </S.UserContectInfo>
                            <S.UserContectInfo>
                                <S.UserContectTitle>Github</S.UserContectTitle>
                                <S.UserLink
                                    to={
                                        "https://github.com/" +
                                        userData.githubID
                                    }
                                >
                                    <S.UserContect>
                                        {userData.githubID}
                                    </S.UserContect>
                                </S.UserLink>
                            </S.UserContectInfo>
                        </S.UserContectSection>
                    </S.UserBox>
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
                                        : data.thumbnail
                                }
                                date={UseDate(data.createdAt).date}
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
                                date={UseDate(post.createdAt).date}
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
