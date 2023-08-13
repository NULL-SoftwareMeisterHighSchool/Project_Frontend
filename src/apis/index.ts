import { getCookie, setCookie } from "@utils/cookies";
import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import { postRefresh } from "./auth";
import { getExpiredCookieHours } from "@utils/expires";

export const instance = axios.create({
    baseURL: `${import.meta.env.VITE_BASEURL}`,
    timeout: 10000,
});

instance.interceptors.request.use(
    (config) => {
        const accessToken = getCookie("accessToken");
        const returnConfig = {
            ...config,
        };
        if (accessToken) {
            //@ts-ignore
            returnConfig.headers = {
                Authorization: `Bearer ${accessToken}`,
            };
        }
        return returnConfig;
    },
    (error: AxiosError) => Promise.reject(error)
);

instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError<AxiosError>) => {
        if (axios.isAxiosError(error) && error.response) {
            const { message } = error.response.data;
            const refreshToken = getCookie("refreshToken");

            if (message === "유효하지 않은 엑세스 토큰입니다") {
                if (refreshToken) {
                    postRefresh().then((data) => {
                        setCookie("accessToken", data.accessToken, {
                            path: "/",
                            expires: getExpiredCookieHours(data.expiresAt),
                        });
                    }).catch(()=>{
                        // window.location.href = "/login"
                    });
                } else {
                    // window.location.href = "/login";
                }
            } else return Promise.reject(error);
        }
    }
);