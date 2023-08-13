import { Body2, TitleLarge } from "@styles/text.style";
import { color } from "@styles/theme.style";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

export const BlogContainer = styled.div`
  gap: 40px 14px;
  width: 100%;
  display: grid;
  grid-template-columns:1fr;
  grid-template-rows:auto;

  @media screen and (min-width: 900px){
    grid-template-columns:repeat(2, 1fr);
  }
  @media screen and (min-width: 1250px){
    grid-template-columns:repeat(3, 1fr);
  }
  @media screen and (min-width: 1650px){
    grid-template-columns:repeat(4, 1fr);
  }
`;

export const StateBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`