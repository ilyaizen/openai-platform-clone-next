"use client";

import * as React from "react";
import { BookOpen, Bot, LifeBuoy, PanelLeft, Send, Settings2 } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { Sidebar, SidebarContent, SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Models",
      url: "#",
      icon: Bot,
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarContent className="pt-14">
        <NavMain items={data.navMain} />
        <SidebarMenuButton onClick={toggleSidebar} className="group/toggle">
          <PanelLeft className="text-muted-foreground" />
          <span className="whitespace-nowrap text-xs font-bold text-muted-foreground opacity-0 transition-opacity duration-200 group-hover/toggle:opacity-100">
            Sidebar Toggle
          </span>
        </SidebarMenuButton>
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  );
}
