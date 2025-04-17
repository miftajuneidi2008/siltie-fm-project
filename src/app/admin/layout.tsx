import { AdminSidebar } from "@/components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="flex-1 flex-grow">
        <SidebarTrigger />
        <div className="md:px-8">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default AdminLayout;
