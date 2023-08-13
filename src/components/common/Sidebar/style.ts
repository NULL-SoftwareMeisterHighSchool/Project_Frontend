import styled from "styled-components";

import { Body, Body2, BodyStrong } from "@styles/text.style";
import { color } from "@styles/theme.style";

export const Bar = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 20px;

    width: 240px;
    height: 100vh;
    left: 0px;
    top: 0px;

    background: ${color.grayLight2};
`;

export const User = styled(Body2)`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 200px;
    height: 56px;

    border-radius: 8px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

export const Line = styled.hr`
    width: 200px;
    height: 0px;

    border: 1px solid ${color.grayLight1};
`;

export const Write = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 200px;
    height: 44px;
    text-decoration: none;

    border-radius: 8px;
    background-color: ${color.white};
    transition: BackGround 0.2s;
    &:hover {
        background-color: ${color.grayLight1};
    }
`;
export const LoginBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 100%;
    height: 44px;

    border-radius: 8px;
    background-color: ${color.white};
    transition: BackGround 0.2s;
    &:hover {
        background-color: ${color.grayLight1};
    }
`;
export const WriteText = styled(BodyStrong)`
    color: ${color.grayDark1};
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    width: 200px;
    height: 202px;

    /* Inside auto layout */

    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
`;

export const Subtitle = styled(Body)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 0px 10px;

    color: ${color.grayDark1};
`;
