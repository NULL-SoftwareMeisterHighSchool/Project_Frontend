import Button from "@components/common/Button";
import { Link } from "react-router-dom";
import * as S from "./style";
import { useSetRecoilState } from "recoil";
import { sidebarAtom } from "@atoms/sidebar";

interface BannerPropTypes {
    title: string;
    subtitle: string;
    buttonValue: string;
    to: string;
}

const Banner = ({ title, subtitle, to, buttonValue }: BannerPropTypes) => {
    const setCategory = useSetRecoilState(sidebarAtom);
    return (
        <S.Banner>
            <S.BannerText>
                <S.BannerTitle>{title}</S.BannerTitle>
                <S.BannerSubtitle>{subtitle}</S.BannerSubtitle>
            </S.BannerText>
            <Link to={to}>
                <Button
                    height="48px"
                    value={buttonValue}
                    onClick={() =>
                        setCategory(
                            title === "인기 게시글" ? "게시판" : "기술 블로그"
                        )
                    }
                ></Button>
            </Link>
        </S.Banner>
    );
};

export default Banner;
