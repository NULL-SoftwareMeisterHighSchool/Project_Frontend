import { Body2, TitleLarge } from "@styles/text.style";
import { color } from "@styles/theme.style";
import styled from "styled-components";

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: max-content;
    gap: 22px;
`;
export const Path = styled(Body2)<{ primaryBase?: boolean }>`
    color: ${(props) => props.primaryBase && color.primaryBase};
`;
export const Title = styled(TitleLarge)``;
