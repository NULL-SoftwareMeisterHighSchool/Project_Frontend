import { createGlobalStyle } from "styled-components";
import { color } from "./theme.style";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        margin: 0;
        box-sizing: border-box;
    }
    p {
        font-family: 'Pretendard';
    }

    input, button {
        border: none;
        outline: none;
        font-family: 'Pretendard';
    }
    
    input:focus, button:focus {
        outline: none;
    }

    .toastui-editor-contents h1 {
        font-family: 'Pretendard';
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: 52px;
        border: none;

        margin: 52px 0 15px 0;
        padding-bottom: 7px;
    }

    .toastui-editor-contents h2 {
        font-family: 'Pretendard';
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 36px;
        border: none;

        margin: 20px 0 13px 0;
        padding-bottom: 7px;
    }

    .toastui-editor-contents h3 {
        font-family: 'Pretendard';
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px;

        margin: 18px 0 2px;
    }

    .toastui-editor-contents h4 {
        font-family: 'Pretendard';
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 26px;

        margin: 16px 0 1px;
    }

    .toastui-editor-contents p {
        font-family: 'Pretendard';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; 

        margin: 0px;
        padding: 0px;
        border: 0px;
        vertical-align: baseline;
    }

    .toastui-editor-contents strong {
        font-family: 'Pretendard';
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;

        margin: 0px;
        padding: 0px;
        border: 0px;
        vertical-align: baseline;
    }

    .CircularProgressbar {
        width: 120px;
        height: 120px;
    }

    .CircularProgressbar-text {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: ${color.primaryBase};
     }
    
    @media screen and (max-width: 1000px){
        *{
            display: none;
        }
    }
`;

export default GlobalStyle;
