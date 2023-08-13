import { Sidebar } from "@components/common/Sidebar";
import * as S from "./style";
import { Outlet } from "react-router-dom";


const AppLayout = () => {
  return (
    <S.Container>
      <Sidebar />
      <S.Content>
        <Outlet/>
      </S.Content>
    </S.Container>
  );
};

export default AppLayout;
