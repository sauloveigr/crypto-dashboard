"use client";

import { Search, Bell, HelpCircle, Command, Menu } from "lucide-react";
import { useState } from "react";
import { Button, Kbd, UserButton } from "@/components/ui";

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6 border-y border-r border-border">
      <div className="flex w-full items-center justify-between gap-2 sm:gap-4">
        <Button
          onClick={onMenuClick}
          variant="ghost"
          className="lg:hidden p-2"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="flex items-center flex-1 max-w-sm lg:max-w-md">
          <div className="group relative flex items-center w-full transition-all duration-200">
            <Search
              className="absolute left-2 sm:left-3 h-3.5 w-3.5 text-muted-foreground transition-colors"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Search..."
              className={`
                w-full rounded-lg border bg-muted/40 py-1.5 pl-8 sm:pl-9 pr-3 sm:pr-16 text-xs outline-none 
                transition-all duration-200 placeholder:text-muted-foreground/70
                ${searchFocused
                  ? "border-border bg-background shadow-sm"
                  : "border-transparent hover:border-border/60 hover:bg-background/50"
                }
              `}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              aria-label="Search"
            />
            <Kbd className="absolute right-2 hidden md:flex">
              <Command className="h-2.5 w-2.5" />
              <span>K</span>
            </Kbd>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="icon"
            className="hidden sm:flex"
            aria-label="Help"
          >
            <HelpCircle className="h-4 w-4" />
          </Button>

          <Button
            variant="icon"
            className="relative"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
            <span
              className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-background"
              aria-hidden="true"
            />
          </Button>

          <div className="ml-2 h-5 w-px bg-border/60 hidden sm:block" aria-hidden="true" />

          <UserButton
            name="John Doe"
            role="Admin"
            className="ml-1"
          />
        </div>
      </div>
    </header>
  );
}
