import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Post from "@components/common/Post";
import Banner from "@components/pages/Main/Banner";
import Record from "@components/pages/Main/Record";
import { useQuery } from "react-query";
import { getGit } from "@apis/users";
import { getBlog } from "@apis/article";
import { useState, useEffect } from "react";
import * as S from "./style";
import TitlePath from "@components/common/TitlePath";
import UseDate from "@hooks/useDate";
import { BLOGTYPE } from "../../types/blog";
import { useRecoilValue } from "recoil";
import { profileIdAtom, profileNameAtom } from "@atoms/profile";
import { useNavigate } from "react-router-dom";
import Modal from "@components/common/modal";
import { BodyLarge, TitleLarge } from "@styles/text.style";
import Button from "@components/common/Button";
type boardDataProps = {
  articles: BLOGTYPE[];
  totalCount: number;
};

const Main = () => {
  const [button, setButton] = useState(false);
  const myId = useRecoilValue(profileIdAtom);
  const myName = useRecoilValue(profileNameAtom);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(true);
  useEffect(()=>{
    if(sessionStorage.getItem("startModal")){
        setOpenModal(false)
    }
  },[])

  useEffect(() => {
    if (openModal === false) sessionStorage.setItem("startModal", "true");
  }, [openModal]);

  const [skillData, setSkillData] = useState<boardDataProps>({
    articles: [],
    totalCount: 0,
  });

  const [blogData, setBlogData] = useState<boardDataProps>({
    articles: [],
    totalCount: 0,
  });

  const [gitData, setGitData] = useState({
    contributionCount: 0,
    starCount: 0,
    issueCount: 0,
    pullRequestCount: 0,
    contributedRepositoryCount: 0,
    score: 0,
  });
  const { refetch: userGitRefetch } = useQuery(
    "userGit",
    () => getGit({ setGitData }),
    {
      enabled: false,
    }
  );

  const { refetch: generalRefetch } = useQuery(
    "GENERAL",
    () =>
      getBlog({
        type: "GENERAL",
        offset: 0,
        limit: 8,
        order: "LIKES",
        setData: setBlogData,
      }),
    {
      enabled: false,
    }
  );

  const { refetch: techRefetch } = useQuery(
    "TECH",
    () =>
      getBlog({
        type: "TECH",
        offset: 0,
        limit: 8,
        order: "LIKES",
        setData: setSkillData,
      }),
    {
      enabled: false,
    }
  );
  useEffect(() => {
    userGitRefetch();
    generalRefetch();
    techRefetch();
  }, []);

  const setGrade = (score: number): string => {
    if (score >= 10000) {
      return "S";
    } else if (score >= 5000) {
      return "A";
    } else if (score >= 2000) {
      return "B";
    } else if (score >= 800) {
      return "C";
    } else if (score >= 200) {
      return "D";
    } else if (score >= 50) {
      return "E";
    } else {
      return "F";
    }
  };

  window.onresize = () => {
    if (window.innerWidth < 500) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  return (
    <>
      {openModal && (
        <Modal setVal={setOpenModal}>
          <TitleLarge>서비스 유지보수 중단</TitleLarge>
          <BodyLarge>안녕하세요. Somein 서비스 운영진입니다.</BodyLarge>
          <BodyLarge>
            Somein은 현재 운영진의 사정으로 인하여 유지보수를 중단하기로
            결정하였습니다. 짧은 기간 동안 서비스를 이용해 주신 모든 분께
            감사드립니다.
          </BodyLarge>
          <BodyLarge>
            서비스 유지 보수는 중단되더라도 Somein 서비스 이용은 계속됩니다.
          </BodyLarge>
          <Button value="닫기" onClick={() => setOpenModal(false)}></Button>
        </Modal>
      )}
      <TitlePath title="메인" path="Menu > 메인" primaryBase />
      <S.Github>
        <S.Score>
          <CircularProgressbarWithChildren
            value={gitData.score / 100}
            text={setGrade(gitData.score)}
            styles={buildStyles({
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,
              textSize: "30px",
              // Colors
              pathColor: `rgba(0, 132, 219)`,
              trailColor: "#EFF4F4",
              backgroundColor: "#3e98c7",
            })}
          />
          <S.CircularText>
            {myId ? (
              <>
                <S.ScoreTitle>{myName}&apos;s</S.ScoreTitle>
                <S.ScoreSubtitle>Github Stats</S.ScoreSubtitle>
              </>
            ) : (
              <S.ScoreTitleLogin onClick={() => navigate("/login")}>
                로그인
              </S.ScoreTitleLogin>
            )}
          </S.CircularText>
        </S.Score>
        <S.Comprehensive>
          <Record
            title="Total Stars Earned"
            score={myId ? gitData.starCount : 0}
          />
          <Record
            title="Total Commits"
            score={myId ? gitData.contributionCount : 0}
          />
          <Record
            title="Total PRs"
            score={myId ? gitData.pullRequestCount : 0}
          />
          <Record title="Total Issues" score={myId ? gitData.issueCount : 0} />
          <Record
            title="Contributed to"
            score={myId ? gitData.contributedRepositoryCount : 0}
          />
        </S.Comprehensive>
      </S.Github>
      <S.BoardArea>
        <S.BlogContainer>
          <Banner
            title="인기 게시글"
            subtitle="인기 게시글을 만나보세요"
            buttonValue={button ? "게시물 더보기" : "더보기"}
            to="/blog"
          />
          <S.Board>
            {blogData.articles.map((post, index) => (
              <Post
                key={index}
                id={post.id}
                title={post.title}
                name={post.author.name}
                date={UseDate(post.createdAt).date}
                to={"/blogdetail?id=" + post.id}
              />
            ))}
          </S.Board>
        </S.BlogContainer>
        <S.BlogContainer>
          <Banner
            title="기술 블로그"
            subtitle="전공 지식을 습득해 보세요"
            buttonValue={button ? "기술 더보기" : "더보기"}
            to="/skill"
          />
          <S.Board>
            {skillData.articles.map((post, index) => (
              <Post
                key={index}
                id={post.id}
                title={post.title}
                name={post.author.name}
                date={UseDate(post.createdAt).date}
                to={"/blogdetail?id=" + post.id}
              />
            ))}
          </S.Board>
        </S.BlogContainer>
      </S.BoardArea>
    </>
  );
};

export default Main;
