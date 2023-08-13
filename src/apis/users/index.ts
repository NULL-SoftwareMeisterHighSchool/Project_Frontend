import { patchEditPasswordProps, getGitProps, putEditMeProps } from "./users.type";
import { instance } from "..";

const router = `/users`;

export const patchEditPassword = async ({
    currentPassword,
    newPassword,
}: patchEditPasswordProps) => {
    const resPatchEditPassword = await instance.patch(
        `${router}/me/edit-password`,
        { currentPassword, newPassword }
    );

    return resPatchEditPassword;
};


export const getGit = async ({ setGitData }: getGitProps) => {
    const resGetGit = await instance.get(`${router}/me/stat`,);
    setGitData(resGetGit.data);
    return resGetGit;
};

export const getUserMe = async () => {
    const res = await instance.get(`${router}/me`,);
    return res;
};

export const getUser = async (id : string | undefined) => {
    const res = await instance.get(`${router}/${id}`,);
    return res;
};

export const putEditMe = async ({
    bio,
    stacks,
    githubURL,
    portfolioURL,
}: putEditMeProps) => {
    const resPutEditMe = await instance.put(`${router}/me`, {
        bio,
        stacks,
        githubURL,
        portfolioURL,
    });

    return resPutEditMe;
};

export const getUserMeTiny = async () => {
    const res = await instance.get(`${router}/me/tiny`,);
    return res;
};

export const delMeWithdraw = async()=>{
    const res = await instance.delete(`${router}/me/withdraw`);
    return res;
}
