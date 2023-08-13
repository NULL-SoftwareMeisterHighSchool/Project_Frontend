import { InputHTMLAttributes } from "react";
import * as S from "./style";
import { Search } from "@assets/images/icon/Search";
import { color } from "@styles/theme.style";

interface SearchPropTypes extends InputHTMLAttributes<HTMLInputElement> {
  width?: string,
}

const SearchBar = ({
  width = "328px",
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  onKeyDown,
}: SearchPropTypes) => {
  return (
    <S.Container width={width}>
      <Search fill={color.grayBase} width={24} height={24}/>
      <S.InputBox
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onKeyDown={onKeyDown}
      />
    </S.Container>
  )
}

export default SearchBar;