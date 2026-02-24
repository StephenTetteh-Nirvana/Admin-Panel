import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import GlobalSidebar from "@/components/global/GlobalSidebar"
import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <TooltipProvider>
        <GlobalSidebar/>
        <main>
          <SidebarTrigger />
            {children}
        </main>
      </TooltipProvider>
    </SidebarProvider>
   
  );
}
