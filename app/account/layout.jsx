import SideNavigation from "@/components/SideNavigation";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
