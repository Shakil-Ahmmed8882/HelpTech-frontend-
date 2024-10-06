"use client";

import { useState } from "react";
import { LeftArrowIcon, MenuIcon } from "@/src/assets/icons";

import { motion } from "framer-motion";

import { SidebarMenu } from "./SidebarMenu";
import { Divider } from "@nextui-org/divider";
import Logo from "@/src/components/UI/Logo";
import { userRoutes } from "@/src/routes/userRoutes";
import { useUser } from "@/src/context/user.provider";
import { adminRoutes } from "@/src/routes/adminRoutes";

const SidebarWrapper = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const {user} = useUser()
  const conditionalDashboardRoutes = user && user?.role === "user"? userRoutes : adminRoutes
  const toggleSidebar = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <motion.aside
      animate={{ width: isCollapsed ? "3rem" : "20rem" }}
      className={`${isCollapsed ? 'h-11 sm:min-h-screen' : 'min-h-screen'} ms:from-[#000] bg-gradient-to-b from-[#ffff] to-[#ebebebe5] dark:from-[#000] dark:to-[#272727] rounded-tl-lg p-3 pt-3 z-[99] md:sticky  fixed top-2 left-1`}
      initial={{ width: "20rem" }}
      style={{ overflow: "hidden" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex items-center justify-between">
        {isCollapsed ? (
          <MenuIcon className="mx-auto" onClick={toggleSidebar} />
        ) : (
          <Logo />
        )}
        {!isCollapsed && (
          <LeftArrowIcon className="cursor-pointer" onClick={toggleSidebar} />
        )}
      </div>
        <Divider className="mt-4 mb-8"/>
      <SidebarMenu isCollapsed={isCollapsed} routes={conditionalDashboardRoutes} />
    </motion.aside>
  );
};





export default SidebarWrapper;