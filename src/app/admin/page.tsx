import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCog, Folder, Newspaper } from "lucide-react";
import React from "react";

const AdminPage = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3  my-6 w-[90%] mx-auto ">
      <div className="bg-sky-400 w-full h-36 flex items-center justify-center cursor-pointer shadow-md">
        <p className="text-slate-100 font-semibold">24 News Articles</p>
      </div>

      <div className="bg-teal-400 w-full h-36 flex items-center justify-center cursor-pointer shadow-md">
        <p className="text-slate-100 font-semibold">6 News Categories</p>
      </div>

      <div className="bg-cyan-400 w-full h-36 flex items-center justify-center cursor-pointer shadow-md">
        <p className="text-slate-100 font-semibold">8 Programm Categories</p>
      </div>

      <div className="bg-cyan-400 w-full h-36 flex items-center justify-center cursor-pointer shadow-md">
        <p className="text-slate-100 font-semibold">16 Program Articles</p>
      </div>
    </div>
  );
};

export default AdminPage;
