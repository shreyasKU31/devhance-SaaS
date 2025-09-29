"use client"; // Required for client-side interactions like Link

import Link from "next/link"; // Import the Link component
import { LayoutDashboard, FileText, Share2, Settings } from "lucide-react";

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

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Stories",
    url: "/stories",
    icon: FileText,
  },
  {
    title: "Public View",
    url: "/public-view", //[username]
    icon: Share2,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl my-4">
            DevHance
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="mb-2 rounded-xl hover:bg-gray-800"
                >
                  <SidebarMenuButton asChild>
                    {/* Replace the `<a>` tag with `Link` */}
                    <Link href={item.url} className="flex items-center">
                      <item.icon className="w-5 h-5 mr-3" />
                      <span className="text-base">{item.title}</span>
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
