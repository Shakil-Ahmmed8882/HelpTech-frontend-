"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

import { usePathname, useRouter } from "next/navigation";
import { Avatar } from "@nextui-org/avatar";

import { useUser } from "@/src/context/user.provider";
import { protectedRoutes } from "@/src/constants";
import { logout } from "@/src/services/authService";



export default function NavbarDropdown() {
  const router = useRouter();
  const { setIsLoading: UserLoading, user } = useUser();
  const pathname = usePathname();

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  const handleLogout = () => {
    logout();
    UserLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" size="sm" src={user?.profilePhoto} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handleNavigation(`${user?.role === "user"? "/user-dashboard":"/admin-dashboard"}`)}>
          Dashboard
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation(`${user?.role === "user"? "/user-dashboard/profile":"/admin-dashboard/profile"}`)}>
        Profile
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation(`${user?.role === "user"? "/user-dashboard/followings-followers":"/admin-dashboard/followings-followers"}`)}>
        Followers/Followings
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation(`${user?.role === "user"? "/user-dashboard/login-logout-history":"/admin-dashboard/login-history"}`)}>
          Login/logout activity
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          onClick={handleLogout}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    
  );
}
