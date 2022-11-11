import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <div className="content">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
