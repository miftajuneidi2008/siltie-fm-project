import Sidebar from "@/components/Sidebar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
   
      <div className="flex min-h-screen w-full gap-2 bg-slate-200">
        <div className="w-1/4 mx-auto bg-slate-50 shadow-lg ">
          <h2 className="text-center my-4">Admin PAGE</h2>
          <hr className="mb-4 w-[80%] mx-auto" />
          <Sidebar />
        </div>
        <div className="w-3/4 ">{children}</div>
      </div>
  );
};

export default AdminLayout;
