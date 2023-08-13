import Button from "@components/common/Button";
import { Link } from "react-router-dom";
import * as S from "./style";

interface BannerPropTypes {
  title: string;
  subtitle: string;
  buttonValue: string;
  to: string;
}

const Banner = ({ title, subtitle, to, buttonValue }: BannerPropTypes) => {
  return (
    <S.Banner>
      <S.BannerText>
        <S.BannerTitle>{title}</S.BannerTitle>
        <S.BannerSubtitle>{subtitle}</S.BannerSubtitle>
      </S.BannerText>
      <Link to={to}>
        <Button height="48px" value={buttonValue}></Button>
      </Link>
    </S.Banner>
  );
};

export default Banner;
