import styled from "styled-components";
import { color } from "@styles/theme.style";
import Input from "@components/common/Input";

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const BackArrow = styled.img`
  width: 24px;
  height: 24px;
  transform-origin: 100% 100%;
  position: absolute;
  left: -54px;
`;
export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  > div {
    display: flex;
    gap: 10px;
    > p:nth-child(2) {
      color: ${color.primaryBase};
      cursor: pointer;
    }
  }
`;

export const SelectFileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SelectFile = styled.div`
  position: relative;
  > div {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    background-color: ${color.grayLight2};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > input {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    opacity: 0;
    position: absolute;
    top: 0;
  }
`;
