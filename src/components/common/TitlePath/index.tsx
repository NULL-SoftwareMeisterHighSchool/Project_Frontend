import * as S from "./style";

interface AppLayoutPropTypes {
    path?: string;
    title?: string;
    primaryBase?: boolean;
}

const TitlePath = ({ path, title, primaryBase }: AppLayoutPropTypes) => {
    return (
        <S.TitleContainer>
            <S.Path primaryBase={primaryBase}>{path}</S.Path>
            <S.Title>{title}</S.Title>
        </S.TitleContainer>
    );
};

export default TitlePath;
