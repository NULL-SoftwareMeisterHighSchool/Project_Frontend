import Filter from "@components/pages/Ranking/Filter";
import * as S from "./style";
import Ranks from "@components/pages/Ranking/Ranks";
import { Body2 } from "@styles/text.style";
import TitlePath from "@components/common/TitlePath";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getRank } from "@apis/rank";

type rankingDataType = {
    name: string;
    school: string;
    admissionYear: number;
    commitCount: number;
    score: number;
    id:number
};

const Ranking = () => {
    const [rankData, setRankData] = useState<rankingDataType[]>([]);

    const [filterData, setFilterData] = useState({
        user: "전체",
        school: "전체 학교",
    });
    const { refetch } = useQuery(
        "users",
        () => getRank({ setRankData, filterData }),
        {
            enabled: false,
        }
    );

    useEffect(()=>{
        refetch();
    },[])
    useEffect(() => {
        getRank({ setRankData, filterData });
    }, [filterData]);

    return (
        <>
            <TitlePath title="랭킹" path="Menu > 랭킹" />
            <Filter setFilterData={setFilterData} />

            <S.RanksContainer>
                <S.RankHeader>
                    <div>
                        <Body2>순위</Body2>
                    </div>
                    <div>
                        <Body2>이름</Body2>
                    </div>
                    <div>
                        <Body2>학교</Body2>
                    </div>
                    <div>
                        <Body2>입학년도</Body2>
                    </div>
                    <div>
                        <Body2>총커밋</Body2>
                    </div>
                    <div>
                        <Body2>점수</Body2>
                    </div>
                </S.RankHeader>
                <S.Line />
                <S.RankContianer>
                    {rankData.map((v, i) => {
                        return (
                            <>
                                <Ranks {...v} rank={i + 1} />
                                <S.Line />
                            </>
                        );
                    })}
                </S.RankContianer>
            </S.RanksContainer>
        </>
    );
};

export default Ranking;
