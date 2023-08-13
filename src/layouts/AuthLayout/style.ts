import styled from "styled-components";
import { color } from "@styles/theme.style";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const LoginImage = styled.div<{ src: string }>`
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center center;
  ::before {
    content: "";
    opacity: 0.4;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: ${color.black};
  }
  img {
    position: relative;
  }
  @media screen and (max-width: 1100px) {
      display: none;
    }
`;

export const AuthForm = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 0px 40px;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 64px;

    width: 400px;
  }
`;