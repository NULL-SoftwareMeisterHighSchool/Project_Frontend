import { ReactNode } from "react";
import * as S from "./style";

interface ModalProps {
    children?: ReactNode;
    setVal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, setVal }: ModalProps) => {
    return (
        <S.BackGround onClick={() => setVal(false)}>
            <S.Container onClick={(e) => e.stopPropagation()}>
                {children}
            </S.Container>
        </S.BackGround>
    );
};

export default Modal;
