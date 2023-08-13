import { Title } from "@styles/text.style";
import { color } from "@styles/theme.style";
import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    width: 100vw;
    padding: 24px 60px;
    align-items: center;
    justify-content: space-between;
`;

export const Post = styled.button`
    display: flex;
    padding: 14px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    text-decoration: none;
    border-radius: 8px;
    background-color: ${color.primaryBase};
    color: ${color.white};
`;

export const STitle = styled(Title)``;

export const TitleInput = styled.input`
    height: 100px;
    font-size: 40px;
    width: 100vw;
    padding: 24px 60px;
    border-top: 1px solid ${color.grayBase};
`; 
