import { color } from "@styles/theme.style";
import styled from "styled-components";

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    > svg {
        cursor: pointer;
    }
`;

export const InputBtnContainer = styled.div`
    display: flex;
    gap: 12px;
    align-items: flex-end;
    > div {
        flex: 1;
    }
    > button {
        display: flex;
        background-color: ${color.primaryBase};
        color: white;
        border-radius: 8px;
        padding: 15px 20px;
    }
`;

export const SkillContainer = styled.div`
    display: flex;
    gap: 4px;
    overflow-x: auto;
`;
export const Skill = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 8px;
    background-color: ${color.primaryLight3};
    color: ${color.primaryBase};
    padding: 8px 12px;
    white-space: nowrap;
    > svg {
        cursor: pointer;
    }
`;

export const UpdateBtn = styled.button`
    border-radius: 8px;
    padding: 14px;
    display: flex;
    justify-content: center;
    background-color: ${color.primaryBase};
    color: white;
    transition: all 0.3s ease-in-out;
    :disabled {
        color: ${color.grayBase};
        background-color: ${color.grayLight1};
    }
`;
