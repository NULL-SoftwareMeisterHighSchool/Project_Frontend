import { Title } from "@styles/text.style";
import { color } from "@styles/theme.style";
import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    width: 100vw;
    padding: 24px 60px;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 490px){
        flex-direction: column;
        gap: 12px;
        padding: 24px 0px;
    }
`;

export const Button = styled.div`
    display: flex;
    gap: 12px;
`;

export const STitle = styled(Title)``;

export const TitleInput = styled.input`
    height: 100px;
    font-size: 40px;
    width: 100vw;
    padding: 24px 60px;
    border-top: 1px solid ${color.grayBase};
`; 
