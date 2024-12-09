"use client";

import * as React from "react";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";

export function AppHeader() {
  const { state } = useSidebar();

  return (
    <header className="h-14 w-full bg-background">
      <div
        className="grid h-full transition-[grid-template-columns] duration-300 ease-out"
        style={{
          gridTemplateColumns:
            state === "collapsed" ? "calc(var(--sidebar-width-icon) + 15px) 1fr" : "var(--sidebar-width) 1fr",
        }}
      >
        <div />
        <div className="flex h-full items-center justify-between">
          <h1 className="text-xl font-semibold">Platform</h1>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Playground
            </Button>
            <Button variant="ghost" size="sm">
              API Keys
            </Button>
            <Button variant="ghost" size="sm">
              Usage
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}