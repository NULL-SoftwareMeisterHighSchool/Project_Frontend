import { Body2, BodyLarge2 } from "@styles/text.style";
import * as S from "./style";
import { Favorite } from "@assets/images/icon/Favorite";
import { color } from "@styles/theme.style";
import { Eye } from "@assets/images/icon/Eye";

type BlogPropsType = {
    id: number;
    name: string;
    summary: string;
    titleImg?: string;
    date: string;
    to: string;
    likes: number;
    views: number;
};
const BlogPost = ({
    id,
    name,
    summary,
    titleImg,
    date,
    to,
    likes,
    views,
}: BlogPropsType) => {
    return (
        <S.MainContainer to={to}>
            {titleImg && <img src={titleImg} />}
            <S.Title>
                <S.TitleText>{name}</S.TitleText>
                <S.Line />
                <S.TitleText>{date}</S.TitleText>
            </S.Title>

            <BodyLarge2>{summary}</BodyLarge2>
            <S.LikeViewContainer>
                <div>
                    <Favorite width={16} height={16} fill={color.grayDark1} />
                    <Body2>{likes}</Body2>
                </div>
                <div>
                    <Eye width={16} height={16} fill={color.grayDark1} />
                    <Body2>{views}</Body2>
                </div>
            </S.LikeViewContainer>
        </S.MainContainer>
    );
};

export default BlogPost;
