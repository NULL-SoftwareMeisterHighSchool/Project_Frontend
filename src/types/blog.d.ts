export type BLOGTYPE = {
    type:string;
    id: number;
    title: string;
    thumbnail: string;
    summary: string;
    author: {
        id: number;
        name: string;
    };
    createdAt: string;
    likes: number;
    views: number;
};

export type BLOGDETAILTYPE = {
    title: string,
    views: number,
    likes: number,
    body: string,
    createdAt: string,
    author: {
        id: number,
        name: string,
    },
    isLiked: boolean,
    isAuthor: boolean,
    commentCount: number,
    comments: CONTENTTYPE[],
}

type CONTENTTYPE = {
    commentID: number,
    author: {
        id: number,
        name: string,
    },
    content: string,
    createdAt: string,
}