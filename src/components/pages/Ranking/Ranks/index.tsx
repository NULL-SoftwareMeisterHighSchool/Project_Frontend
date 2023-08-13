import UserIcon from "@components/common/UserIcon";
import * as S from "./style";
import { Body2 } from "@styles/text.style";
import { useNavigate } from "react-router-dom";
type Props = {
    name: string;
    school: string;
    admissionYear: number;
    commitCount: number;
    score: number;
    rank: number;
    id:number;
};

const Ranks = ({
    name,
    school,
    admissionYear,
    commitCount,
    score,
    rank,
    id
}: Props) => {
    const navigate = useNavigate();
    return (
        <S.Container onClick={()=> navigate('/profile/'+id)}>
            <S.Rank rank={rank}>
                <Body2>{rank}</Body2>
            </S.Rank>
            <div>
                <UserIcon backWidth="40px" />
                <Body2>{name}</Body2>
            </div>
            <div>
                <Body2>
                    {school === "DSM"
                        ? "대덕"
                        : school === "GSM"
                        ? "광주"
                        : school === "DGSM"
                        ? "대구"
                        : "부산"}
                    소프트웨어마이스터고
                </Body2>
            </div>
            <div>
                <Body2>{admissionYear}년</Body2>
            </div>
            <div>
                <Body2>{commitCount}</Body2>
            </div>
            <div>
                <Body2>{score}점</Body2>
            </div>
        </S.Container>
    );
};

export default Ranks;
