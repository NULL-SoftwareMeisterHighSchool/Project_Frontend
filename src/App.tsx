import AppLayout from "@layouts/AppLayout";
import Alarm from "@pages/Alarm";
import Board from "@pages/Board";
import BoardDetail from "@pages/BoardDetail";
import EnRolledSignup from "@pages/EnRolledSignup";
import Error from "@pages/Error";
import GraduateSignup from "@pages/GraduateSignup";
import Login from "@pages/Login";
import Main from "@pages/Main";
import Profile from "@pages/Profile";
import Password from "@pages/Password";
import PersonInfo from "@pages/PersonInfo";
import Ranking from "@pages/Ranking";
import Setting from "@pages/Setting";
import SkillBlog from "@pages/SkillBlog";
import WriteBoard from "@pages/WriteBoard";
import UpdateBoard from "@pages/UpdateBoard";
import { createBrowserRouter } from "react-router-dom";

const app = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "",
                element: <Main />,
            },
            {
                path: "profile/:id",
                element: <Profile />,
            },
            {
                path: "ranking",
                element: <Ranking />,
            },
            {
                path: "alarm",
                element: <Alarm />,
            },
            {
                path: "blog",
                element: <Board />,
            },
            {
                path: "skill",
                element: <SkillBlog />,
            },
            {
                path: "blogdetail/:id",
                element: <BoardDetail />,
            },
            {
                path: "setting",
                element: <Setting />,
            },
        ],
    },
    {
      path:"/write",
      element:<WriteBoard/>
    },
    {
        path:"/updateblog/:id",
        element:<UpdateBoard/>
    },
    {
        path: "/graduatesign",
        element: <GraduateSignup />,
    },
    {
        path: "/enrollsign",
        element: <EnRolledSignup />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/pwchange",
        element: <Password />,
    },
    {
        path: "/*",
        element: <Error />,
    },{
        path:"/개인정보처리방침",
        element:<PersonInfo/>
    }
]);
export default app;
