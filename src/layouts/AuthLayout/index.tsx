import { ReactNode } from "react";
import * as S from "./style";

import LoginIcon from "@assets/images/pages/LoginIcon.svg";
import LoginImg from "@assets/images/pages/LoginImg.jpg";

interface SignupLayoutTypes {
  children?: ReactNode;
  position: string;
};

const AuthLayout = ({ children, position }: SignupLayoutTypes) => {
  return (
    <S.Container>
      {position === "right" && <S.LoginImage src={LoginImg}>
        <img src={LoginIcon} alt="Somei 로고" />
      </S.LoginImage>}
      <S.AuthForm>
        {children}
      </S.AuthForm>
      {position === "left" && <S.LoginImage src={LoginImg}>
        <img src={LoginIcon} alt="Somei 로고" />
      </S.LoginImage>}
    </S.Container >
  )
}

export default AuthLayout;