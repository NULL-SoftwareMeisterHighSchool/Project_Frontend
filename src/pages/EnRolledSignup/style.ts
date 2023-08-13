import styled from "styled-components";
import { color } from "@styles/theme.style";

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
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 64px;
`
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
export const DropContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`