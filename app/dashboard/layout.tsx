"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-1 flex-col overflow-hidden lg:ml-64">
        <main className="flex-1 overflow-y-auto bg-muted/20">
          <div className="w-full px-4 sm:px-6 py-6 sm:py-8">
            <Button
              onClick={() => setSidebarOpen(true)}
              variant="ghost"
              className="lg:hidden mb-4 p-2"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
