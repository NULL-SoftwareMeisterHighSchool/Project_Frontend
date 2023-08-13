import styled from "styled-components";
import { color } from "@styles/theme.style";

export const Background = styled.div<{ width: string }>`
    width: ${props => props.width} !important;
    height: ${props => props.width} !important;
    min-width: ${props => props.width};
    background-color: ${color.grayLight1};

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: ${props => props.width};
`;