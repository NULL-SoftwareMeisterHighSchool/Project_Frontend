import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 430px){
    flex-direction: column;
    align-items: end;
  }
`;

