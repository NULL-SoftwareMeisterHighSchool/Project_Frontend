const UseDate = (createdAt: string) => {
    const date = createdAt.slice(0, 10).replaceAll("-", ".");
    const time = createdAt.slice(11, 16);
    return { date, time };
};

export default UseDate;
