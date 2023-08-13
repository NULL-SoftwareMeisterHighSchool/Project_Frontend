import React, { useState, useEffect } from "react";
import * as S from "./style";
import Post from "@components/common/Post";
import SearchFilter from "@components/pages/SkillBlog/SearchFilter";
import { LeftArrow } from "@assets/images/icon/LeftArrow";
import { RightArrow } from "@assets/images/icon/RightArrow";
import { color } from "@styles/theme.style";
import { getBlog } from "@apis/article";
import Pagination from "react-js-pagination";
import useDate from "@hooks/useDate";
import TitlePath from "@components/common/TitlePath";
import { BLOGTYPE } from "../../types/blog";

type blogDataProps = {
    articles: BLOGTYPE[];
    totalCount: number;
};

const Board = () => {
    const getBlogData = (limit: number) => {
        getBlog({
            type: "GENERAL",
            offset: (page - 1) * (limit + 1),
            limit: limit,
            order:
                filterData === "최신순"
                    ? "TIME"
                    : filterData === "최신순"
                    ? "VIEWS"
                    : "LIKES",
            setData: setBlogData,
            query: searchInput,
        });
    };
    
    /** blog 데이터 */
    const [blogData, setBlogData] = useState<blogDataProps>({
        articles: [],
        totalCount: 80,
    });
    /** 검색어 */
    const [searchInput, setSearchInput] = useState<string>("");
    /** 필터 */
    const [filterData, setFilterData] = useState("최신순");
    
    const [page, setPage] = useState(1);
    
    const handlePageChange = (page:number) => {
        setPage(page);
        //console.log(page);
    };

    /** 필터 변경시 데이터 받아오기 */
    useEffect(()=>{
            setPage(1);
            getBlogData(8);
    },[filterData]);

    useEffect(()=>{
        getBlogData(8);
    },[page]);

    return (
        <>
            <TitlePath title="게시판" path="Menu > 게시판" />
            <S.BoardContainer>
                <SearchFilter
                    onKeyDown={(e: React.KeyboardEvent) => {
                        if (e.keyCode === 13) {
                            setPage(1);
                            getBlogData(0);
                        }
                    }}
                    searchVal={searchInput}
                    searchSetVal={setSearchInput}
                    setFilterData={setFilterData}
                />
                <S.Content>
                    {blogData.articles.map((post) => (
                        <Post
                            key={post.id}
                            id={post.id}
                            name={post.author.name}
                            title={post.title}
                            date={useDate(post.createdAt).date}
                            to={"/blogdetail/"+post.id}
                        />
                    ))}
                </S.Content>
                <Pagination
                    activePage={page}
                    itemsCountPerPage={8}
                    totalItemsCount={blogData.totalCount}
                    pageRangeDisplayed={5}
                    prevPageText={
                        <S.ArrowButton>
                            <LeftArrow width="16" fill={color.black} />
                        </S.ArrowButton>
                    }
                    nextPageText={
                        <S.ArrowButton>
                            <RightArrow width="16" fill={color.black} />
                        </S.ArrowButton>
                    }
                    onChange={handlePageChange}
                />
            </S.BoardContainer>
        </>
    );
};

export default Board;
