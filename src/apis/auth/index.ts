
import {
    postSendEmailProps,
    postSignupStudentProps,
    postVerifyProps,
} from "./auth.type";

import { postLoginProps } from "./auth.type";
import { instance } from "..";
import { getCookie } from "@utils/cookies";

const router = `/auth`;

export const postLogin = async ({ id, password }: postLoginProps) => {
    const resPostLogin = await instance.post(`${router}/login`, {
        id,
        password,
    });

    return resPostLogin;
};

export const postSendEmail = async ({ email }: postSendEmailProps) => {
    const resPostSendEmail = await instance.post(`${router}/send-mail`, {
        email,
    });

    return resPostSendEmail;
};

export const postVerify = async ({ email, code }: postVerifyProps) => {
    const resPostVerify = await instance.post(`${router}/verify`, {
        email,
        code,
    });
    return resPostVerify;
};

export const postSignupStudent = async ({
    school,
    email,
    admissionYear,
    name,
    userID,
    password,
    githubID,
}: postSignupStudentProps) => {
    const resPostSignupStudent = await instance.post(
        `${router}/signup/student`,
        { school, email, admissionYear, name, accountName:userID, password, githubID }
    );

    return resPostSignupStudent;
};

export const postRefresh = async () => {
    const response = await instance.post(
        `${router}/refresh`,
        {
            refreshToken: getCookie("refreshToken"),
        }
    );
    return response.data;
};
