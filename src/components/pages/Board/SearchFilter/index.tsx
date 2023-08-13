import SearchBar from "@components/common/SearchBar";
import * as S from "./style";
import Dropdown from "@components/common/Dropdown";

const SearchFilter = () => {
  const filter1 = [{ text: "전체" }, { text: "1학년" }, { text: "2학년" }, { text: "3학년" }, { text: "재학생" }, { text: "졸업생" }];
  const filter2 = [{ text: "최신순" }, { text: "좋아요순" }, { text: "조회수순" }];
  return (
    <S.MainContainer>
      <SearchBar placeholder="Placeholder" />
      {/* <Dropdown describe="전체" items={filter1}/>
      <Dropdown describe="최신순" items={filter2}/> */}
    </S.MainContainer>
  )
}

export default SearchFilter;