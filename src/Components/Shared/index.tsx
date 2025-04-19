import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const SharedLayout = () => {
  return (
    <div className="flex flex-col gap-1">
      <Header />
      <div className="flex gap-5">
        <SideBar />
        <div className="w-[85%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
