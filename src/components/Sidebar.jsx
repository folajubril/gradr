import React from "react";
import { logo } from "../assets";

const Sidebar = () => {
  return (
    <div className="w-100 h-dvh p-6 bg-slate-100 flex flex-col justify-between shadow-zinc-800">
      <img src={logo} alt="logo" />

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          {/* icon */}
          <p className="cursor-pointer">Assessments</p>
        </div>
        <div className="flex justify-between items-center">
          {/* icon */}
          <p className="cursor-pointer">Grader</p>
        </div>
        <div className="flex justify-between items-center">
          {/* icon */}
          <p className="cursor-pointer">Submissions</p>
        </div>
        <div className="flex justify-between items-center">
          {/* icon */}
          <p className="cursor-pointer">Settings</p>
        </div>
      </div>

      <div className="flex flex-col">
        <p>Report Bug</p>
        <p>FAQ</p>
      </div>
    </div>
  );
};

export default Sidebar;
