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
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useUser } from "@clerk/nextjs";

export function AppSidebar() {
  const pathname = usePathname();
  const { user } = useUser();
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
      url: `/${user?.username}`, //[username]
      icon: Share2,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ];
  return (
    <Sidebar variant="inset">
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
                    <Link
                      href={item.url}
                      className={clsx(
                        "text-sm group flex p-3 w-full items-center font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                        pathname === item.url
                          ? "text-white bg-white/10"
                          : "text-zinc-400"
                      )}
                    >
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
