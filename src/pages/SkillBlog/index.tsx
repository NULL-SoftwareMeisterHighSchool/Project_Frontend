import * as S from "./style";
import SearchFilter from "@components/pages/SkillBlog/SearchFilter";
import BlogPost from "@components/pages/SkillBlog/BlogPost";
import { SkillBlogDefaultImg } from "@assets/images/allfiles";
import TitlePath from "@components/common/TitlePath";
import React, { useEffect, useState } from "react";
import { getBlog } from "@apis/article";
import useDate from "@hooks/useDate";
import { useInView } from "react-intersection-observer";
import { BodyLarge2 } from "@styles/text.style";
import { BLOGTYPE } from "../../types/blog";

type skillDataProps = {
    articles: BLOGTYPE[];
    totalCount: number;
};
``

const SkillBlog = () => {
    /** skill blog 데이터 */
    const [skillData, setSkillData] = useState<skillDataProps>({
        articles: [],
        totalCount: 0,
    });
    /** 검색어 */
    const [searchInput, setSearchInput] = useState<string>("");
    /** 필터 */
    const [filterData, setFilterData] = useState("최신순");

    /** axios 연동 함수 */
    const getSkillData = (newData?: boolean) => {
        if (newData) {
            getBlog({
                type: "TECH",
                offset: 0,
                limit: 20,
                order:
                    filterData === "최신순"
                        ? "TIME"
                        : filterData === "조회수순"
                        ? "VIEWS"
                        : "LIKES",
                setData: setSkillData,
                query: searchInput,
            });
        } else if (skillData.articles.length < skillData.totalCount) {
            getBlog({
                type: "TECH",
                offset: skillData.articles.length,
                limit: 20,
                order:
                    filterData === "최신순"
                        ? "TIME"
                        : filterData === "최신순"
                        ? "VIEWS"
                        : "LIKES",
                setData: setSkillData,
                query: searchInput,
                data: skillData,
            });
        }
    };

    /** 필터 변경시 데이터 받아오기 */
    useEffect(() => {
        getSkillData(true);
    }, [filterData]);

    useEffect(() => {
        getSkillData(true);
    }, []);

    const [ref, inView] = useInView();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (inView && !loading) {
            setLoading(true);
            getSkillData();
            setLoading(false);
        }
    }, [inView]);

    return (
        <>
            <TitlePath title="기술 블로그" path="Menu > 기술블로그" />
            <S.MainContainer>
                <SearchFilter
                    onKeyDown={(e: React.KeyboardEvent) => {
                        if (e.keyCode === 13) {
                            getSkillData(true);
                        }
                    }}
                    searchVal={searchInput}
                    searchSetVal={setSearchInput}
                    setFilterData={setFilterData}
                />
                <S.BlogContainer>
                    {skillData.articles.map((data: BLOGTYPE) => (
                        <BlogPost
                            to={"/blogdetail/" + data.id}
                            key={data.id}
                            id={data.id}
                            name={data.author.name}
                            summary={data.title}
                            titleImg={
                                data.thumbnail === ""
                                    ? SkillBlogDefaultImg
                                    : data.thumbnail
                            }
                            date={useDate(data.createdAt).date+" "+useDate(data.createdAt).time}
                            likes={data.likes}
                            views={data.views}
                        />
                    ))}
                </S.BlogContainer>
                <S.StateBar ref={ref}>
                    {loading && <BodyLarge2>loading...</BodyLarge2>}
                    {skillData.articles.length >= skillData.totalCount && (
                        <BodyLarge2>더 불러올 게시글이 없습니다.</BodyLarge2>
                    )}
                </S.StateBar>
            </S.MainContainer>
        </>
    );
};

export default SkillBlog;
