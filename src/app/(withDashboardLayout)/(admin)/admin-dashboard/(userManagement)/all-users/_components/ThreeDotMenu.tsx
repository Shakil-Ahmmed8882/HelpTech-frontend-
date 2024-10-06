"use client";

// components/ThreeDotMenu.tsx
import React, { useState, useRef } from "react";
import useClickOutside from "@/src/hooks"; // Ensure you have this hook or import from wherever it's defined
import { useDeleteUser } from "@/src/hooks/admin.analytics.hook";

interface ThreeDotMenuProps {
  userId: string;
}

const ThreeDotMenu = ({ userId }: ThreeDotMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const userBlockDeleteRef = useRef(null);
  const { mutate: handleDeleteUserById} = useDeleteUser();

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  // Handle outside click to close menu
  useClickOutside(userBlockDeleteRef, () => setIsOpen(false));

  const handleBlockUser = async () => {
    console.log(`Blocking user with ID: ${userId}`);
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
            Block User
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
