import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { CommentStateType } from "./comment.type";
import { BodyStrong, Body2, Body, Title, BodyLarge2 } from "@styles/text.style";
import { color } from "@styles/theme.style";

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

export const Comment = styled.div<{ state: CommentStateType }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 6px;

    height: 100px;
    width: 100%;

    background: #f3f3f3;
    border-radius: 8px;

    ${({ state }) => state && getCommentStyle[state]}
`;

const getCommentStyle: Record<CommentStateType, FlattenSimpleInterpolation> = {
    COMMENT: css`
        width: 100%;
    `,
    REPLY: css`
        width: 570px;
        margin-left: 70px;
    `,
};

export const CommentContents = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;

    width: 100%;
    height: 40px;
    position: relative;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 6px;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px;
    gap: 10px;
    width: 100%;
    > div{
        >svg{
            cursor: pointer;
        }
    }
`;

export const CommentName = styled(BodyStrong)`
    line-height: 17px;
    color: ${color.black};
`;

export const CommentContent = styled(Body2)`
    line-height: 17px;
    color: ${color.black};
`;

export const CommentInfo = styled.div`
    display: flex;
    padding-left: 0px;
    align-items: flex-start;
    gap: 10px;
    margin-top: 6px;
`;

export const CommentInfoText = styled(Body)`
    color: ${color.grayDark1};
`;

export const CommentDelet = styled.div`
    display: flex;
    padding: 12px;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    background-color: #ffe6d8;
    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.12);

    width: max-content;

    position: absolute;
    right: 10%;
    top:-50px;
    transform: translate(100%, 100%);
`;

export const CommentDeletText = styled(BodyStrong)`
    color: ${color.critical};
`;