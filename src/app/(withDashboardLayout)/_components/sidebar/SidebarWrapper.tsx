"use client";

import { useState } from "react";
import { LeftArrowIcon, MenuIcon } from "@/src/assets/icons";
import Logo from "@/src/components/UI/Logo";
import { motion } from "framer-motion";

const SidebarWrapper = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    
    <motion.aside
      initial={{ width: "20rem" }}
      animate={{ width: isCollapsed ? "3rem" : "20rem" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`${isCollapsed? 'h-11  sm:min-h-screen':'  min-h-screen'} ms:from-[#000] bg-gradient-to-b from-[#ffff] to-[#ebebebe5] dark:from-[#000] dark:to-[#272727] rounded-tl-lg p-3 pt-3 z-[99] md:relative fixed top-2 left-1 `}
      style={{ overflow: "hidden" }}
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
    </motion.aside>
  );
};

export default SidebarWrapper;
