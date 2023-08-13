import { color } from "@styles/theme.style";
import styled from "styled-components";

export const RankContianer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Line = styled.hr`
    color: ${color.grayLight2};
    border: 1px solid;
`;

export const RanksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;

export const RankHeader = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 2fr 2fr 1.4fr 1fr 0.5fr;
    padding: 0px 12px;
    height: 50px;
    align-items: center;
    > div {
        display: flex;
        align-items: center;
        gap: 20px;
        color: ${color.black};
        &:last-child {
            display: flex;
            justify-content: end;
        }
    }
    min-width: max-content;
    gap: 10px;

    @media screen and (max-width: 1400px) {
        grid-template-columns: 0.7fr 2fr 2fr 1fr 0.5fr;
        >div:nth-child(4){
            display: none;
        }
    }
    @media screen and (max-width: 1200px) {
        grid-template-columns: 0.7fr 2fr 1fr 0.5fr;
        >div:nth-child(3){
            display: none;
        }
    }
    @media screen and (max-width:1100px) {
        grid-template-columns: 0.7fr 2fr 0.5fr;
        >div:nth-child(6){
            display: none;
        }
    }

`;
