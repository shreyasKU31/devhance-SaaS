import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/sidebar/SideBar";
import "./globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-screen">
        <aside className="">
          <SidebarProvider className="pr-4 h-full">
            <AppSidebar />
            <SidebarTrigger className="flex flex-col justify-between h-full px-8 py-8" />
          </SidebarProvider>
        </aside>
        <main className="overflow-y-auto w-full">{children}</main>
      </div>
    </>
  );
}
