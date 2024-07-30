"use client";

import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import LayoutProvider from "@/providers/LayoutProvider";
import Sidebar from "./_sections/Sidebar";
import ReduxProvider from "@/providers/ReduxProvider";

interface LayoutProps {
  children: ReactNode;
}

export default function PanelLayout({ children }: LayoutProps) {
  return (
    <ReduxProvider>
      <LayoutProvider>
        <div className="flex min-h-dvh w-full flex-col md:flex-row">
          <div className="remove-scrollbar relative hidden w-72 overflow-y-auto bg-background-200 shadow-sm md:block">
            <Sidebar />
          </div>

          <div className="flex-1 overflow-hidden py-10 md:py-12">
            <div className="w-full max-w-5xl px-5 md:px-10">{children}</div>
          </div>
        </div>
        <Toaster />
      </LayoutProvider>
    </ReduxProvider>
  );
}
