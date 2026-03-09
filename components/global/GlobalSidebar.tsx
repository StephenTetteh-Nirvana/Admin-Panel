'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar"

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {LayoutDashboard, Inbox, ShoppingBasket, Settings, Layers, UsersRound} from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import Link from "next/link"
import Image from "next/image"


// Navigation items for the sidebar 
const items = [
  {
    title: "Dashboard",
    url: "/content",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    url: "/content/products",
    icon: ShoppingBasket,
  },
  {
    title: "Categories",
    url: "/content/categories",
    icon: Layers,
  },
  {
    title: "Users",
    url: "#",
    icon: UsersRound,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

const GlobalSidebar = () => {
  const {state} = useSidebar() // state from sidebar context to determine if the sidebar is collapsed or not.
  const pathname = usePathname()
  const isCollapsed = state === "collapsed" ? state : null // this sets the variable to collapsed based on the status of the sidebar.

  return (
    <Sidebar>
      {/* SIDEBAR HEADER  */}
      <SidebarHeader>
        <div className="flex items-center justify-center gap-2 w-full">
          <Image src="/images/logo.png" alt="Logo" width={20} height={20}/>
          {!isCollapsed && <span className="text-xl font-bold text-green-500">Toutem</span>}
        </div>
      </SidebarHeader>

      {/* CONTENTS OF THE SIDEBAR  */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {isCollapsed ? ( 
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuButton asChild className={pathname === item.url ? "bg-[#2666CF] text-white" : ""}>
                          <Link href={item.url} className="flex items-center gap-2">
                            <item.icon className="h-5 w-5" />
                            <span className="font-semibold">{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </TooltipTrigger>

                      {/* THIS SHOWS THE TOOLTIP CONTENT WHEN THE SIDEBAR IS COLLAPSED  */}
                      <TooltipContent side="right">
                        <span>{item.title}</span>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <SidebarMenuButton asChild className={pathname === item.url ? "bg-[#2666CF] text-white" : ""}>
                      <Link href={item.url} className="flex items-center gap-2">
                        <item.icon className="h-5 w-5" />
                        <span className="font-semibold">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
 
      {/* FOOTER OF THE SIDEBAR  */}
      <SidebarFooter className="py-2 flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full flex justify-center px-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <div className="flex flex-col">
                  <h4 className="">Admin</h4>
                  <h4 className="text-slate-500 text-[12px] font-semibold">admin@gmail.com</h4>
                </div>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-32" side="top">
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>

   )
}

export default GlobalSidebar