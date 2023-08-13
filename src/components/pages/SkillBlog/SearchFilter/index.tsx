import SearchBar from "@components/common/SearchBar";
import * as S from "./style";
import Dropdown from "@components/common/Dropdown";
import { useEffect, useState } from "react";

type ItemType = {
    text: string;
};

type filterTypeProps = {
    setFilterData: React.Dispatch<React.SetStateAction<string>>;
    searchVal: string;
    searchSetVal: React.Dispatch<React.SetStateAction<string>>;
    onKeyDown: (e:React.KeyboardEvent)=>void
};

const SearchFilter = ({
    setFilterData,
    searchVal,
    searchSetVal,
    onKeyDown,
}: filterTypeProps) => {
    const filter2 = [
        { text: "최신순" },
        { text: "좋아요순" },
        { text: "조회수순" },
    ];
    const [newFilter, setNewFilter] = useState<ItemType | undefined>({
        text: "최신순",
    });
    useEffect(() => {
        setFilterData(newFilter?.text!);
    }, [newFilter]);

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchSetVal(e.target.value);
    };
    return (
        <S.MainContainer>
            <SearchBar
                onKeyDown={onKeyDown}
                value={searchVal}
                onChange={(e) => onChangeSearch(e)}
                placeholder="Placeholder"
                width="800px"
            />
            <Dropdown
                val={newFilter}
                setVal={setNewFilter}
                describe="최신순"
                items={filter2}
            />
        </S.MainContainer>
    );
};

export default SearchFilter;
