import { color } from "@styles/theme.style";
import styled from "styled-components";

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const SubmitContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    > div {
        display: flex;
        gap: 10px;
        > p:nth-child(2) {
            color: ${color.primaryBase};
            cursor: pointer;
        }
    }
`;