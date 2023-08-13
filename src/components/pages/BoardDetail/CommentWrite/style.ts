import styled from "styled-components";
import { BodyLarge } from "@styles/text.style";

export const CommentInfo = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 12px;
    align-self: stretch;
`;

export const Title = styled(BodyLarge)`
    line-height: 24px;
`;

export const InputBtnContainer = styled.div`
    display: flex;
    gap: 12px;
    align-items: flex-end;
    width: 100%;
    > div {
        flex: 1;
    }
    > button { 
        display: flex;
    }
`;