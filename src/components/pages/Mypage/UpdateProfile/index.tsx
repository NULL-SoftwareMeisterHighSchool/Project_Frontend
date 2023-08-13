import Modal from "@components/common/modal";
import * as S from "./style";
import { BodyStrong, Title } from "@styles/text.style";
import { Clear } from "@assets/images/icon/Clear";
import Input from "@components/common/Input";
import { useEffect, useState } from "react";
import { putEditMe } from "@apis/users";
import { useMutation } from "react-query";
import { alertError, alertWarning } from "@utils/toastify";

interface UpdateProfileProps {
    val: boolean;
    setVal: React.Dispatch<React.SetStateAction<boolean>>;
    userData: UserDateType;
    refetch: () => void;
}
interface UserDateType {
    bio: string;
    githubID: string;
    portfolioURL: string;
    stacks: string[];
}
const UpdateProfile = ({
    val,
    setVal,
    userData,
    refetch,
}: UpdateProfileProps) => {
    const [inputSkill, setInutSkill] = useState<string>("");
    const [userDataUpdate, setUserDataUpdate] = useState<UserDateType>({
        bio: "",
        githubID: "",
        portfolioURL: "",
        stacks: [],
    });
    const [btnState, setBtnState] = useState<boolean>(false);

    const enterSkill = () => {
        if (userDataUpdate.stacks.length < 5) {
            if (inputSkill.trim()) {
                setUserDataUpdate({
                    ...userDataUpdate,
                    stacks: [inputSkill.trim(), ...userDataUpdate.stacks],
                });
                setInutSkill("");
            }
        } else {
            alertWarning("최대 5개까지 입력 가능합니다.");
            setInutSkill("");
        }
    };

    const skillOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInutSkill(e.target.value);
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserDataUpdate({
            ...userDataUpdate,
            [name]: value,
        });
    };
    useEffect(() => {
        setUserDataUpdate({ ...userData});
    }, []);

    useEffect(() => {
        changeBtnState();
    }, [userDataUpdate]);

    const changeBtnState = () => {
        const arr1 = userData.stacks;
        const arr2 = userDataUpdate.stacks;

        if (
            userDataUpdate.githubID === userData.githubID &&
            userDataUpdate.bio === userData.bio &&
            userDataUpdate.portfolioURL === userData.portfolioURL &&
            arr1.length === arr2.length &&
            arr1.every((value, idx) => value === arr2[idx])
        ) {
            setBtnState(false);
        } else {
            setBtnState(true);
        }
    };

    const { mutate: updateMutate } = useMutation(putEditMe, {
        onSuccess: () => {
            setVal(false);
            refetch();
        },
        onError: () => {
            alertError("회원정보 수정 실패했습니다.");
        },
    });

    return (
        <>
            {val && (
                <Modal setVal={setVal}>
                    <S.TitleContainer>
                        <Title>프로필 수정</Title>
                        <Clear onClick={() => setVal(false)} />
                    </S.TitleContainer>
                    <Input
                        width="100%"
                        title="한줄소개"
                        name="bio"
                        placeholder="한줄소개를 입력해주세요"
                        onChange={onChange}
                        value={userDataUpdate.bio}
                    />
                    <Input
                        width="100%"
                        title="Github 아이디"
                        name="githubURL"
                        placeholder="Github 아이디를 입력해주세요"
                        onChange={onChange}
                        value={userDataUpdate.githubID}
                    />
                    <Input
                        width="100%"
                        title="포트폴리오 링크"
                        name="portfolioURL"
                        placeholder="포트폴리오 링크를 입력해주세요"
                        onChange={onChange}
                        value={userDataUpdate.portfolioURL}
                    />
                    <S.InputBtnContainer>
                        <div>
                            <Input
                                width="100%"
                                title="기술스택"
                                name="stacks"
                                placeholder="기술스택을 입력하여 추가해주세요"
                                onChange={skillOnchange}
                                value={inputSkill}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        enterSkill();
                                    }
                                }}
                            />
                        </div>
                        <button onClick={() => enterSkill()}>
                            <BodyStrong>기술스택 추가</BodyStrong>
                        </button>
                    </S.InputBtnContainer>
                    <S.SkillContainer>
                        {userDataUpdate.stacks.map((skill, i) => (
                            <S.Skill key={skill + i}>
                                <BodyStrong>{skill}</BodyStrong>
                                <p
                                    onClick={() => {
                                        setUserDataUpdate({
                                            ...userDataUpdate,
                                            stacks: userDataUpdate.stacks.filter(
                                                (_, index) => index !== i
                                            ),
                                        });
                                    }}
                                >
                                    x
                                </p>
                            </S.Skill>
                        ))}
                    </S.SkillContainer>
                    <S.UpdateBtn
                        disabled={!btnState}
                        onClick={() =>
                            updateMutate({
                                bio: userDataUpdate.bio,
                                stacks: userDataUpdate.stacks,
                                githubURL: userDataUpdate.githubID,
                                portfolioURL: userDataUpdate.portfolioURL,
                            })
                        }
                    >
                        <BodyStrong>프로필 수정하기</BodyStrong>
                    </S.UpdateBtn>
                </Modal>
            )}
        </>
    );
};

export default UpdateProfile;
