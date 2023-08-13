import { color } from "@styles/theme.style";
import styled from "styled-components";

export const Container = styled.div<{ width: string }>`
  display: flex;
  align-items: center;
  
  gap: 12px;
  padding: 12px 14px;
  background-color: ${color.grayLight2};
  border-radius: 8px;
  
  height: 48px;
  width: 100%;
  min-width: max-content;
`;

export const InputBox = styled.input`
  background: ${color.grayLight2};
  font-size: 16px;
  width: 100%;

  &::placeholder {
    color: ${color.grayBase};
  }
`;
