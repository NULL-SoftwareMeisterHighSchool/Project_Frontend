import * as S from './style';

interface PropTypes {
    children: String;
}

const Stack = ({children}:PropTypes) => {
    return (  
        <S.Container>
            <S.StackName>{children}</S.StackName>
        </S.Container>
    );
}
 
export default Stack;