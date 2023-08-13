import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "@styles/global.style";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { CookiesProvider } from "react-cookie";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

// if (process.env.NODE_ENV === "development") {
//     const { worker } = await import("./mocks/browser");
//     worker.start();
// }

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RecoilRoot>
        <CookiesProvider>
            <QueryClientProvider client={queryClient}>
                <GlobalStyle />
                <RouterProvider router={App} />
                <ToastContainer
                    limit={3}
                />
            </QueryClientProvider>
        </CookiesProvider>
    </RecoilRoot>
);
