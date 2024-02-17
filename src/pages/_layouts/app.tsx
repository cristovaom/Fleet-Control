import { Header } from "@/components/header/header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <div className="flex min-h-screen min-w-screen flex-col antialiased">
        <Header />

        <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
          <Outlet />
        </div>
      </div>
    </>
  );
}
