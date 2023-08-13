import { color } from "@styles/theme.style";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const SettingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 24px;
    width: 100%;
    height: 64px;
    border-radius: 8px;
    transition: all 0.1s;
    >div{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    :hover{
        background-color: ${color.grayLight2};
    }
`
export const Icon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color.grayLight2};
    border-radius: 50%;
`
export const Title = styled.p<{ color:string }>`
    font-size: 14px;
    white-space: nowrap;
    color: ${props => props.color ? props.color : "black"}
`