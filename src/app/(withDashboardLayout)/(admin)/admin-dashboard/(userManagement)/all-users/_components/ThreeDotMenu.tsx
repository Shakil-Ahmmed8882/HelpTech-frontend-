"use client";

// components/ThreeDotMenu.tsx
import React, { useState, useRef } from "react";
import useClickOutside from "@/src/hooks"; // Ensure you have this hook or import from wherever it's defined
import { useDeleteUser } from "@/src/hooks/admin.analytics.hook";
import { useUpdateUserInfo } from "@/src/hooks/auth.hook";
import { IUser } from "@/src/types";

interface ThreeDotMenuProps {
  userId: string;
  user: IUser
}

const ThreeDotMenu = ({ userId,user }: ThreeDotMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const userBlockDeleteRef = useRef(null);
  const { mutate: handleDeleteUserById} = useDeleteUser();
  const { mutate: handleEditUserInfo, data: updateduserInfo } = useUpdateUserInfo();


  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  // Handle outside click to close menu
  useClickOutside(userBlockDeleteRef, () => setIsOpen(false));


  const userData = {status :user.status ==="BLOCKED"?"ACTIVE":"BLOCKED"}
  const handleBlockUser = async () => {
    handleEditUserInfo({ id: userId, userData});
    setIsOpen(false);
  };

  // Delete User logic
  const handleDeleteUser = async () => {
    handleDeleteUserById(userId);
    setIsOpen(false);
  };

  return (
    <div ref={userBlockDeleteRef} className="relative inline-block z-[999999]">
      {/* Three Dot Button */}
      <button onClick={handleMenuToggle} className="text-lg cursor-pointer">
        ⋮
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-40 bg-default-100 py-3 rounded shadow-lg z-10">
          <li
            onClick={handleBlockUser}
            className="cursor-pointer px-4 py-2 text-default-900 hover:bg-default-200"
          >
            {user.status ==="BLOCKED"?"Activate user":"Block User"}
          </li>
          <li
            onClick={handleDeleteUser}
            className="cursor-pointer px-4 py-2 hover:bg-default-200 text-danger"
          >
            Delete User
          </li>
        </ul>
      )}
    </div>
  );
};

export default ThreeDotMenu;
