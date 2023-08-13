import { getBlogDetailProps, getBlogProps } from "./type";
import { postCommentType, postWriteType, putWriteType, deleteCommentType } from "./type";
import { useRecoilValue } from "recoil"; 
import { articleIdAtom } from "@atoms/articleId";
import { instance } from "..";

const router = `/articles`;

export const getboardDetail = async (id: string | undefined) => {
    const response = await instance.get(`${router}/${id}`);
    return response;
};

export const getBlog = async ({
    type,
    authorID,
    duration_start,
    duration_end,
    query,
    offset,
    limit,
    order,
    setData,
    data, // 일반 블로그는 사용하면 안됨. 기술블로그만 사용
}: getBlogProps) => {
    const response = await instance.get(
        `${router}?offset=${Number(offset)}&limit=${Number(
            limit
        )}&type=${type}&order=${order}${
            authorID ? "&authorID=" + Number(authorID) : ""
        }${duration_start ? "&duration_start=" + duration_start : ""}${
            duration_end ? "&duration_end=" + duration_end : ""
        }${query ? "&query=" + query : ""}`
    );
    const resData = response.data;
    if (data) {
        setData({
            totalCount: resData.totalCount,
            articles: data.articles.concat(resData.articles),
        });
    } else {
        setData(resData);
    }
};

export const deleteBlog = async (id:string | undefined) => {
    await instance.delete(`${router}/${id}`, {});
}

export const postLike = async (id : string | undefined) => {
    await instance.post(`${router}/${id}/like`, {});
};

export const postComment = async ({ body, id }: postCommentType) => {
    await instance.post(`${router}/${id}/comments`, {
        body,
    });
};

export const deleteComment = async ({ id, commentID } : deleteCommentType) => {
    await instance.delete(`${router}/${id}/comments/${commentID}`, {});
};

export const postWrite = async ({
    title,
    type,
    content,
}: postWriteType) => {
    await instance.post(`${router}/`, {
        title,
        type,
        content,
    });
};

export const putWrite = async ({
    id,
    title,
    content2,
}: putWriteType) => {
    await instance.put(`${router}/${id}`, {
        title,
        "content" : content2,
    });
};
