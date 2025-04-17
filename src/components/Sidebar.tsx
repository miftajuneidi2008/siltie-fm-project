"use client"
import {

  Home,
  Shapes,
  Newspaper,
  Clapperboard,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "ዳሽቦርድ",
    url: "/admin",
    icon: Home,
  },
  {
    title: "ዜና ልጥፍ",
    url: "/admin/news",
    icon: Newspaper,
  },
  {
    title: "ፕሮግራሞች",
    url: "/admin/program",
    icon: Clapperboard,
  },
  {
    title: "ዜና መደብ",
    url: "/admin/news-category",
    icon: Shapes,
  },

  {
    title: "የፕሮግራሞች ዝርዝር",
    url: "/admin/program-category",
    icon: Shapes,
  },
];

export function AdminSidebar() {
  const path = usePathname()
  return (
    <Sidebar className="top-20">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Siltie Fm</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={cn(path === item.url && "font-bold")}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
