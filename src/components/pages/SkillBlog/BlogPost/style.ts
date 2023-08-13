import { Body2, BodyLarge2 } from "@styles/text.style";
import { color } from "@styles/theme.style";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 205px;
    height: 260px;
    cursor: pointer;
    text-decoration: none;
    color: black;
    > img {
        width: 100%;
        height: 171px;
        object-fit: cover;
        border-radius: 8px;
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const TitleText = styled(Body2)`
    font-family: "Pretendard";
    font-style: normal;
    color: ${color.grayDark1};
`;

export const Line = styled.hr`
    border: solid 1px ${color.grayBase};
    height: 12px;
    border-radius: 1px;
`;

export const Summary = styled(BodyLarge2)`
    font-family: "Pretendard";
    font-style: normal;
    color: ${color.black};
`;

export const LikeViewContainer = styled.div`
    display: flex;
    gap: 12px;
    > div {
        display: flex;
        align-items: center;
        gap: 4px;
        color:${color.grayDark1}
    }
`;
