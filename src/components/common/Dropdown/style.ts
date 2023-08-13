import { Body2 } from "@styles/text.style";
import { color } from "@styles/theme.style";
import styled from "styled-components";

export const Dropdown = styled.div<{ width: string }>`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 8px;

    width: ${(props) => props.width};
`;

export const DropdownBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    min-width: max-content;
    height: 48px;
    padding: 14px;
    
    background: ${color.grayLight2};
    border-radius: 8px;

    cursor: pointer;
`;

export const Describe = styled(Body2)`
    margin-right: 5px;
`;

export const DropdownListBox = styled.div<{ isOpen: boolean }>`
    display: ${ ({ isOpen }) => isOpen ? "block" : "none" };
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    position: absolute;
    width: 100%;
    top: 56px;
`;

export const DropdownList = styled.div`
    width: inherit;
    background: ${color.grayLight2};
`;

export const DropdownItem = styled(Body2)`
    display: flex;
    align-items: center;

    width: inherit;
    height: 40px;
    padding: 14px;
`;