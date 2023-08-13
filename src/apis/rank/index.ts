import { instance } from "..";
import { getRankProps } from "./rank.type";

const router = `/users/rank`;

export const getRank = async ({ setRankData, filterData }: getRankProps) => {
    const school =
        filterData.school === "전체 학교"
            ? ""
            : filterData.school === "대덕"
            ? "DSM"
            : filterData.school === "광주"
            ? "GSM"
            : filterData.school === "대구"
            ? "DGSM"
            : "BSM";
    const grade =
        filterData.user === "전체"
            ? ""
            : filterData.user === "1학년"
            ? 1
            : filterData.user === "2학년"
            ? 2
            : 3;

    console.log(school, grade);
    const resGetRank = await instance.get(
        `${router}/?size=30${school && "&school="+school}${grade&&"&grade="+grade}`
    );
    setRankData(resGetRank.data.rank);
};
