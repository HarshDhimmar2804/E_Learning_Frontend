import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-[80vh] mt-5">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
