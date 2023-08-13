import Dropdown from "@components/common/Dropdown";
import * as S from "./style";
import React, { useEffect, useState } from "react";

type ItemType = {
    text: string;
};
type filterType = {
    user: string;
    school: string;
};
type FilterProps = {
    setFilterData: React.Dispatch<React.SetStateAction<filterType>>;
};
const Filter = ({ setFilterData }: FilterProps) => {
    const userFilter = [
        { text: "전체" },
        { text: "1학년" },
        { text: "2학년" },
        { text: "3학년" },
    ];
    const schoolFilter = [
        { text: "전체 학교" },
        { text: "대덕" },
        { text: "광주" },
        { text: "대구" },
        { text: "부산" },
    ];

    const userFilterClick = (e: any) => {
        setUserFilterValue({ text: e.target.innerText });
    };

    const [userFilterValue, setUserFilterValue] = useState<
        ItemType | undefined
    >({ text: "전체" });
    const [schoolFilterValue, setSchoolFilterValue] = useState<
        ItemType | undefined
    >({ text: "전체 학교" });


    useEffect(()=>{
        setFilterData({
            user: userFilterValue?.text!,
            school:schoolFilterValue?.text!
        })
    },[userFilterValue, schoolFilterValue])

    
    return (
        <S.HeaderContainer>
            <S.FilterContainer>
                {userFilter.map((v, i) => {
                    return (
                        <S.Filter
                            onClick={(e: React.MouseEvent) =>
                                userFilterClick(e)
                            }
                            select={userFilterValue?.text === v.text}
                        >
                            {v.text}
                        </S.Filter>
                    );
                })}
            </S.FilterContainer>
            <S.UserDropContainer>
                <Dropdown
                    items={userFilter}
                    val={userFilterValue}
                    setVal={setUserFilterValue}
                    width="100px"
                    describe="user"
                />
            </S.UserDropContainer>

            <Dropdown
                items={schoolFilter}
                val={schoolFilterValue}
                setVal={setSchoolFilterValue}
                describe="school"
            />
        </S.HeaderContainer>
    );
};

export default Filter;
