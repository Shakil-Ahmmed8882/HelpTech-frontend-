"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

import { usePathname, useRouter } from "next/navigation";
import { Avatar } from "@nextui-org/avatar";

import { protectedRoutes } from "@/src/constants";
import { logout } from "@/src/services/authService";
import { useUser } from "@/src/context/user.provider";

export default function NavbarDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, setIsLoading: userLoading } = useUser();

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  const handleLogout = () => {
    logout();
    userLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <>
      {user?.email && (
        <Dropdown>
          <DropdownTrigger>
            <Avatar className="cursor-pointer" src={user?.profilePhoto} />
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem onClick={() => handleNavigation("/user-dashboard")}>
              Dashboard
            </DropdownItem>
            <DropdownItem onClick={() => handleNavigation("/settings")}>
              Settings
            </DropdownItem>
            <DropdownItem
              onClick={handleLogout}
              key="delete"
              className="text-danger"
              color="danger"
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </>
  );
}
