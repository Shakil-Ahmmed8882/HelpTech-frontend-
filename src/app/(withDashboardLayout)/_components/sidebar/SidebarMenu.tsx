"use"
import { TItem, TDashboarRoutes } from "@/src/routes/userRoutes";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { logout } from "@/src/services/authService";
import LogoutButton from "./LogoutButton";

export const SidebarMenu = ({ routes, isCollapsed }: { routes: TDashboarRoutes[], isCollapsed: boolean }) => {

  return (
    <motion.div
      animate={{ opacity: isCollapsed ? 0 : 1 }}
      className={` h-full w-64 shadow-lg pr-4  transition-transform duration-500 ${isCollapsed ? 'transform translate-x-full' : 'transform translate-x-0'}`}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
    >
      <ul>
        {routes.map((route) => (
          <motion.li
            key={route.label}
            animate={{ translateY: isCollapsed ? 20 : 0, opacity: isCollapsed ? 0 : 1 }}
            initial={{ translateY: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {route.children ? (
              <Accordion >
                <AccordionItem
                  className={`transition-all duration-500 ease-in-out ${isCollapsed ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-[500px] opacity-100'}`}
                  title={route.label}
                >
                  <ul className={`pl-3 p-2 rounded-b-lg`}>
                    {route.children.map((child: TItem) => (
                      <motion.li
                        key={child.path}
                        animate={{ translateY: isCollapsed ? 20 : 0, opacity: isCollapsed ? 0 : 1 }}
                        initial={{ translateY: 20, opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }} // Add a slight delay for children
                      >
                        <Link className="pb-6 block" href={`${child?.path}`}>
                          {child.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </AccordionItem>
              </Accordion>
            ) : (
              <motion.div
                animate={{ translateY: isCollapsed ? 20 : 0, opacity: isCollapsed ? 0 : 1 }}
                initial={{ translateY: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  className={`block  pl-2 py-3 transition-all duration-300`}
                  href={`${route.path}`}
                >
                  {route.label}
                </Link>
              </motion.div>
            )}
          </motion.li>
        ))}
      </ul>
      <LogoutButton/>
    </motion.div>
  );
};