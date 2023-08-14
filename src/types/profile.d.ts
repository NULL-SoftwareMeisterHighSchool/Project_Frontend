import { BLOGTYPE } from "./blog";

export type USERDATATYPE = {
    name: string;
    email: string;
    bio: string;
    githubID: string;
    portfolioURL: string;
    stacks: string[];
    articles: {
        general: BLOGTYPE[];
        tech: BLOGTYPE[];
    };
};
