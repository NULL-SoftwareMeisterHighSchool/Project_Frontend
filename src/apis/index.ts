import { delCookie, getCookie, setCookie } from "@utils/cookies";
import axios, { AxiosError } from "axios";
import { postRefresh } from "./auth";
import { getExpiredCookieHours } from "@utils/expires";
import { alertInfo } from "@utils/toastify";

export const instance = axios.create({
    baseURL: `${import.meta.env.VITE_BASEURL}`,
    timeout: 10000,
});

instance.interceptors.request.use(
    (config) => {
        const accessToken = getCookie("accessToken");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error: AxiosError) => Promise.reject(error)
);

instance.interceptors.response.use(
    (response) => response, // 정상 응답의 경우
    async (error: AxiosError<AxiosError>) => {
        // 에러 응답의 경우
        if (axios.isAxiosError(error) && error.response) {
            // axios 에러 객체인지 확인
            const { message } = error.response.data; // 에러 응답의 메시지 추출
            const refreshToken = getCookie("refreshToken");

            if (message === "유효하지 않은 엑세스 토큰입니다") {
                // accessToken이 유효하지 않은 경우
                if (refreshToken) {
                    // refreshToken이 있는 경우
                    try {
                        postRefresh()
                            .then((data) => {
                                setCookie("accessToken", data.accessToken, {
                                    path: "/",
                                    expires: getExpiredCookieHours(
                                        data.expiresAt
                                    ),
                                });
                                if (error.config) {
                                    error.config.headers.Authorization = `Bearer ${data.accessToken}`; // 새로운 accessToken으로 헤더 수정
                                    return axios.request(error.config); // 다시 요청 시도
                                }
                            })
                            .catch(() => {
                                alertInfo("로그인이 필요한 서비스입니다.");
                            });
                    } catch (e) {
                        // refreshToken으로 토큰 갱신에 실패한 경우
                        delCookie("accessToken", { path: "/" });
                        delCookie("refreshToken", { path: "/" });
        
                        throw e;
                    }
                } else {
                    // refreshToken이 없는 경우
                    delCookie("accessToken", { path: "/" });
                    delCookie("refreshToken", { path: "/" });
                    throw error;
                }
            } else {
                // 401 에러 이외의 경우
                throw error;
            }
        } else {
            // axios 에러가 아닌 경우
            throw error;
        }
    }
);
