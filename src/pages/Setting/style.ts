import { color } from "@styles/theme.style";
import { BodyLarge2, Title } from "@styles/text.style";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const UseTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;
export const UserTitle = styled(Title)`
    color: ${color.critical};
`;
export const UserSubTitle = styled(BodyLarge2)`
    color: ${color.critical};
`;

export const UserBtnContainer = styled.div`
    display: flex;
    gap: 12px;
    > button {
        cursor: pointer;
        padding: 14px;
        border-radius: 8px;
        width: 100%;
        &:first-child {
            background-color: ${color.grayLight2};
            color: ${color.grayDark2};
        }
        &:last-child {
            background-color: ${color.critical};
            color: white;
        }
    }
`;
