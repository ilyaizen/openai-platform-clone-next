import * as React from "react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function AppHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center bg-background px-4">
      <div className="flex flex-1 items-center justify-between">
        <div className="flex items-center gap-2">
          <MenuIcon className="h-6 w-6" />
          <Link href="/dashboard" className="flex items-center gap-2">
            <span className="font-semibold">OpenAI Platform Clone</span>
          </Link>
        </div>

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
    </header>
  );
}
