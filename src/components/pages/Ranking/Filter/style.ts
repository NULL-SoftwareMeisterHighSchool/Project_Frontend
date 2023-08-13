import { color } from "@styles/theme.style";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
`;
export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2%;
    @media screen and (max-width: 1550px) {
        display: none;
    }
`;
export const UserDropContainer = styled.div`
    @media screen and (min-width: 1550px) {
        display: none;
    }
`;

export const Filter = styled.button<{ select: boolean }>`
    background-color: ${(props) =>
        props.select ? color.primaryBase : color.white};
    color: ${(props) => (props.select ? color.white : color.grayDark2)};
    padding: 14px 20px;
    border-radius: 8px;
    white-space: nowrap;
`;

export const DropdownContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2%;
`;
