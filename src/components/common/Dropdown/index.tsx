import { useState } from "react";
import { ItemType } from "./dropdown.type";
import * as S from "./style";
import { DownArrow } from "@assets/images/icon/DownArrow";
import { UpArrow } from "@assets/images/icon/UpArrow";

interface PropTypes {
    describe: string;
    items: ItemType[];
    width?: string;
    val: ItemType | undefined;
    setVal: React.Dispatch<React.SetStateAction<ItemType | undefined>>;
}

const Dropdown = ({
    val,
    setVal,
    describe,
    items,
    width = "220px",
}: PropTypes) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    const clickItem = (item: ItemType) => {
        setVal(item);
        toggleOpen();
    };

    return (
        <S.Dropdown width={width}>
            <S.DropdownBox onClick={toggleOpen}>
                <S.Describe>{val?.text ? val.text : describe}</S.Describe>
                {isOpen ? (
                    <UpArrow fill="#7A8184" width="24px" />
                ) : (
                    <DownArrow fill="#7A8184" width="24px" />
                )}
            </S.DropdownBox>
            <S.DropdownListBox isOpen={isOpen}>
                <S.DropdownList>
                    {items.map((item: ItemType, idx) => (
                        <S.DropdownItem
                            key={"dropdown " + idx}
                            onClick={() => clickItem(item)}
                        >
                            {item.text}
                        </S.DropdownItem>
                    ))}
                </S.DropdownList>
            </S.DropdownListBox>
        </S.Dropdown>
    );
};

export default Dropdown;
