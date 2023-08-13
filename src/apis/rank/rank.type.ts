type rankingDataType = {
    name: string;
    school: string;
    admissionYear: number;
    commitCount: number;
    score: number;
    id:number;
};

export type getRankProps = {
    setRankData: React.Dispatch<React.SetStateAction<rankingDataType[]>>;
    filterData:{
        user: string,
        school: string,
    }
};