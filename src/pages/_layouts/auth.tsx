import { ThemeToggle } from "@/components/theme/theme-toogle";
import { CompassIcon } from "lucide-react";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="hidden md:flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground justify-between">
          <div className="flex items-center gap-2">
            <CompassIcon className="h-5 w-5" />
            <span className="font-semibold">Fleet Control</span>
          </div>

          <ThemeToggle />
        </div>

        <footer className="text-sm">
          Painel do parceiro &copy; Fleet Control - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex items-center justify-center text-center ml-40 md:flex flex-col items-center justify-center relative">
        <Outlet />
      </div>
    </div>
  );
}
