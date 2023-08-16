import { Route, Routes } from "react-router-dom";

import AppLayout from "@layouts/AppLayout";
import Board from "@pages/Board";
import BoardDetail from "@pages/BoardDetail";
import EnRolledSignup from "@pages/EnRolledSignup";
import Error from "@pages/Error";
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

const App = () => {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<Main />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/blogdetail/:id" element={<BoardDetail />} />
                <Route path="/blogdetail/:id" element={<BoardDetail />} />
                <Route path="/blog" element={<Board />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/skill" element={<SkillBlog />} />
            </Route>
            <Route path="/write" element={<WriteBoard />} />
            <Route path="/updateblog/:id" element={<UpdateBoard />} />
            <Route path="/enrollsign" element={<EnRolledSignup />} />
            <Route path="/enrollsign" element={<EnRolledSignup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pwchange" element={<Password />} />
            <Route path="/개인정보처리방침" element={<PersonInfo />} />
            <Route path="/*" element={<Error />} />
        </Routes>
    );
};

export default App;
