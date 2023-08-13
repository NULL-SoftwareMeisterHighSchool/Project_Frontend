
export type patchEditPasswordProps = {
    currentPassword: string;
    newPassword: string;
};


export type getGitProps = {
    setGitData: React.Dispatch<React.SetStateAction<{
        contributionCount: number;
        starCount: number;
        issueCount: number;
        pullRequestCount: number;
        contributedRepositoryCount: number;
        score: number;
    }>
    >;
};

export type putEditMeProps = {
    bio: string;
    stacks: string[];
    githubURL: string;
    portfolioURL: string;
};

export type userDataProps = {
    id:string
}