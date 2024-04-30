import React, { useEffect } from "react";
import Sidebar from "@/components/sidebar";

type Props = {
  children: React.ReactNode;
};
const DashboardLayout: React.FC<Props> = ({ ...props }) => {
  return (
    <>
      <div className="absolute " />
      <div className="max-h-[100vh] min-h-[100vh] flex flex-col sm:flex-row justify-start items-start w-full overflow-x-hidden">
        <Sidebar />
        <div className=" flex flex-col overflow-scroll pl-[265px] w-full bg-[#f9f9f9f9]">{props.children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
