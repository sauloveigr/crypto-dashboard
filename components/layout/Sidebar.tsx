"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants/nav";
import { appConfig } from "@/config/app";
import { Button, Avatar } from "@/components/ui";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
        fixed left-0 top-0 z-50 h-screen w-64 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ring-1 ring-inset ring-border
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex h-full flex-col">
          <header className="flex h-14 items-center justify-between px-6">
            <Button
              onClick={onClose}
              variant="ghost"
              className="lg:hidden p-2"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </Button>

            <div className="flex-1 lg:flex-none">
              <Link
                href="/dashboard"
                className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
                onClick={onClose}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                <span className="text-sm font-semibold tracking-tight">
                  {appConfig.name}
                </span>
              </Link>
            </div>
          </header>

          <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-3" aria-label="Sidebar navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className={`
                  group flex items-center gap-3 rounded-md px-3 py-2 text-xs font-medium transition-all
                  ${
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  }
                `}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 ${
                      isActive ? "" : "group-hover:scale-105 transition-transform"
                    }`}
                    aria-hidden="true"
                  />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <footer className="border-t border-border p-3">
            <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left transition-colors hover:bg-secondary/50">
              <Avatar size="lg" />
              <div className="flex-1 overflow-hidden">
                <p className="truncate text-xs font-medium">John Doe</p>
                <p className="truncate text-xs text-muted-foreground">
                  john@acme.com
                </p>
              </div>
            </button>
          </footer>
        </div>
      </aside>
    </>
  );
}
