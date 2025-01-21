import Sidebar from "@/components/Sidebar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full gap-2 bg-slate-200 dark:bg-black relative">
      <div className="w-1/4 mx-auto bg-slate-50 dark:bg-black dark:border-r-[1px] border-gray-600 shadow-lg sticky top-20">
        <h2 className="md:text-center py-4 w-full shadow-sm">Admin PAGE</h2>
        <hr className="mb-4 md:w-[80%] mx-auto w-full" />
        <Sidebar />
      </div>
      <div className="w-3/4 ">{children}</div>
    </div>
  );
};

export default AdminLayout;
