import styled from "styled-components";
import { color } from "@styles/theme.style";
import { TitleLarge2 } from "@styles/text.style";

export const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    background-color: ${color.white};
    height: 100vh;
    width: 100vw;
`;

export const Text = styled(TitleLarge2)`
`;