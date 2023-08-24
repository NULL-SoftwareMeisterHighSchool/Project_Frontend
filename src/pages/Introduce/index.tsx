import React, { useState, useEffect } from "react";
import * as S from "./style";
import Post from "@components/common/Post";
import SearchFilter from "@components/common/SearchFilter";
import { LeftArrow } from "@assets/images/icon/LeftArrow";
import { RightArrow } from "@assets/images/icon/RightArrow";
import { color } from "@styles/theme.style";
import { getBlog } from "@apis/article";
import Pagination from "react-js-pagination";
import TitlePath from "@components/common/TitlePath";
import { BLOGTYPE } from "../../types/blog";
import UseDate from "@hooks/useDate";
import { alertWarning } from "@utils/toastify";


type blogDataProps = {
    articles: BLOGTYPE[];
    totalCount: number;
};

const Introduce = () => {
    const getBlogData = () => {
        getBlog({
            type: "INTRODUCE",
            offset: (page - 1) * 10,
            limit: 10,
            order:
                filterData === "최신순"
                    ? "TIME"
                    : filterData === "조회수순"
                    ? "VIEWS"
                    : "LIKES",
            setData: setBlogData,
            query: searchInput,
        });
    };

    /** blog 데이터 */
    const [blogData, setBlogData] = useState<blogDataProps>({
        articles: [],
        totalCount: 0,
    });
    /** 검색어 */
    const [searchInput, setSearchInput] = useState<string>("");
    /** 필터 */
    const [filterData, setFilterData] = useState("최신순");

    const [page, setPage] = useState(1);

    const handlePageChange = (page: number) => {
        setPage(page);
        //console.log(page);
    };

    /** 필터 변경시 데이터 받아오기 */
    useEffect(() => {
        setPage(1);
        getBlogData();
    }, [filterData]);

    useEffect(() => {
        getBlogData();
    }, [page]);

    return (
        <>
            <TitlePath title="자기소개" path="Menu > 자기소개" />
            <S.BoardContainer>
                <SearchFilter
                    onKeyDown={(e: React.KeyboardEvent) => {
                        if (e.keyCode === 13) {
                            if (
                                searchInput.length === 1 ||
                                searchInput.length === 2
                            ) {
                                alertWarning("2글자 이상 검색 가능합니다.");
                            } else {
                                setPage(1);
                                getBlogData();
                            }
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
                            date={UseDate(post.createdAt).date}
                            to={"/blogdetail?id=" + post.id}
                        />
                    ))}
                </S.Content>
                <Pagination
                    activePage={page}
                    itemsCountPerPage={10}
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

export default Introduce;
