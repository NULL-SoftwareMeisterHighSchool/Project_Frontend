import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { useRef, useEffect, useState } from "react";
import { instance } from "@apis/index";

type Props = {
    content: string;
    setContent2: React.Dispatch<React.SetStateAction<string>>;
};

type HookCallback = (url: string, text?: string) => void;

export type HookMap = {
    addImageBlobHook?: (blob: Blob | File, callback: HookCallback) => void;
};

const BASE_URL = `${import.meta.env.VITE_ARTICLE}`;

const Toast = ({ content, setContent2 }: Props) => {
    const editorRef = useRef<any>(null); //error해결을 위해 any 사용
    const onChange = () => {
        /** error : 'editorRef.current'은(는) 'null'일 수 있습니다. 발생 - 일단 해결*/
        setContent2(editorRef.current.getInstance().getMarkdown());
    };

    useEffect(() => {
        editorRef.current?.getInstance().setMarkdown(content);
        setContent2(content);
    }, [content]);

    return (
        <Editor
            initialValue={content ?? "## 내용을 입력해주세요."}
            // onChange={() => setContents(editorRef.current.getInstance().getHTML())}
            onChange={onChange}
            ref={editorRef}
            previewStyle="vertical"
            initialEditType="markdown"
            autofocus={true}
            hideModeSwitch={true}
            language="ko-KR"
            height="calc(100vh - 190px)"
            hooks={{
                addImageBlobHook: async (blob, callback) => {
                    const formData = new FormData();
                    formData.append("image", blob);

                    try {
                        const res = await instance.post(
                            `${BASE_URL}images`,
                            formData,
                            {
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                },
                            }
                        );
                        callback(res.data.url, `image`);
                    } catch (err: any) {
                        console.error(err);
                        callback(`이미지 업로드 실패, ${err.message}`);
                    }
                },
            }}
        />
    );
};

export default Toast;
