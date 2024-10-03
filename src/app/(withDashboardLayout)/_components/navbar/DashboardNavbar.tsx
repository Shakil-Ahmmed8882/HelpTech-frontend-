"use client";

import { NotificationIcon, SettingsIcon } from "@/src/assets/icons";
import { ThemeSwitch } from "@/src/components/UI/theme-switch";
import { Input } from "@nextui-org/input";
import { ReactNode } from "react";
import DashboardNavbarDropdown from "./DashboardNavbarDropdown";

const DashboardNavbar = ({ children }: { children: ReactNode }) => {
  return (
    <section className="block sm:flex-2 !w-full bg-gradient-to-b from-[#f4f4f4e5] to-[#ffffff]  dark:from-[#272727] dark:to-[#000] rounded-tr-lg sm:ml-12 md:ml-0 sticky top-0">
      <div className="flex justify-between items-center  rounded-lg w-full p-2">
        <h2 className="font-bold w-1/3 hidden md:block">Dashboard</h2>
        <nav className="flex justify-between md:middle-center gap-3 w-full md:w-2/3 h-8">
          <Input
            type="text"
            placeholder="search"
            className="w-full hidden sm:flex"
          />
          <div className="w-full md:w-[200px] flex justify-end text-end md:middle-center items-center gap-3">
            <ThemeSwitch />
            <div className=" hidden md:flex items-center gap-3">
              <SettingsIcon />
              <NotificationIcon />
            </div>
            <DashboardNavbarDropdown />
          </div>
        </nav>
      </div>
      <div className="min-h-screen w-full middle-center ">{children}</div>
    </section>
  );
};

export default DashboardNavbar;
