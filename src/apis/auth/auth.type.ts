
export type postLoginProps = {
    id: string;
    password: string;
}


export type postSendEmailProps = {
    email: string;
}

export type postVerifyProps = {
    email: string;
    code: string;
}

export type postSignupStudentProps = {
    school: string;
    email: string;
    admissionYear: number;
    name: string;
    userID: string;
    password: string;
    githubID: string;
}

// /** 졸업생 회원가입 prop */
// export interface postGraduatedSignnupProps extends postStudentSignupProps {
//     image: string;
// }

/** 이메일 인증 prop */
export interface postEmailProps {
    email: string;
}


export type AuthorizationResponse = {
    access: {
        expiresAt: Date;
        token: string;
    };
    refresh: {
        expiresAt: Date;
        token: string;
    };
}
