import { InputStateType } from './input.type';
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { BodyLarge, BodyStrong } from '@styles/text.style';
import {color} from '@styles/theme.style';

export const Input = styled.input<{ state: InputStateType }>`
    height: 48px;
    padding: 12px 14px;
    border-radius: 8px;
    border: none;
    font-size: 16px;

    ${({ state }) => state && getinputStyle[state]}
`;  

export const Titlebox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
    gap: 4px;

    height: 24px;
`;

export const TitleInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px; 
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

export const Title = styled(BodyLarge)`
    color: ${color.black};
`;

export const TxtBtn = styled(BodyStrong)`
    color: ${color.primaryBase};
`;

const getinputStyle: Record<InputStateType, FlattenSimpleInterpolation> = {
    DEFAULT: css`
      background-color: ${color.grayLight2};
      &::placeholder{
        color: ${color.grayBase};
      }
    `,

    CRITICAL: css`
      background: #FFE6D8;
      &::placeholder{
        color: #DB2C36;
      }
    `,
  
    SUCCESS: css`
      background-color: ${color.grayLight2};
      &::placeholder{
        color: ${color.grayBase};
      }
    `,
};