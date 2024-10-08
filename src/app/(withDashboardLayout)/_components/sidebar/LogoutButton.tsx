"use client";

import { useUser } from "@/src/context/user.provider";
import { logout } from "@/src/services/authService";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

const LogoutButton = () => {

  const {setIsLoading} = useUser()
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/");
    setIsLoading(true)
  };
  return (<button
    className="w-full text-lg font-semibold text-[#ff009dd9] text-start px-3"
    onClick={handleLogout}
    aria-label="Logout" // Accessible label for screen readers
  >
    Logout
  </button>
  
  );
};

export default LogoutButton;
