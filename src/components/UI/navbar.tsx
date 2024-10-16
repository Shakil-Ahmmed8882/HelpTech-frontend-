"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/UI/theme-switch";
import { Logo, SearchIcon } from "@/src/components/icons";
import NavbarDropdown from "./NavbarDropdown";
import { useUser } from "@/src/context/user.provider";
import { NotificationIcon, WriteIcon } from "@/src/assets/icons";
import { Input } from "@nextui-org/input";
import { useEffect, useRef, useState } from "react";
import { useGetAllSearchedPosts } from "@/src/hooks/post.hook";
import { SearchResults } from "./navigation/navbar/SearchResults";
import useClickOutside from "@/src/hooks";
import Image from "next/image";

export const Navbar = () => {
  const { user } = useUser();

  // useState to track the search input value
  const [searchValue, setSearchValue] = useState("");
  const { data } = useGetAllSearchedPosts(searchValue);
  const searchResults = data?.data || [];

  // Handle the onChange event and log the value
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const searchResultRef = useRef<HTMLDivElement>(null);
  const [showSearchResultBody, setShowSearchResultBody] = useState(false);

  // Use the click outside hook to clear search results and input value
  useClickOutside(searchResultRef, () => {
    setShowSearchResultBody(false);
    setSearchValue("");
  });

  useEffect(() => {
    if (searchResults.length > 0) {
      setShowSearchResultBody(true);
    }
  }, [searchResults.length]);

  return (
    <NextUINavbar className="!px-0 py-3" maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit ">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image alt="logo" width={40} height={40} src="/helpTechLogo.png" />{" "}
            {/* Note the leading slash */}
          </NextLink>
        </NavbarBrand>

        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Search Input using basic useState */}
      <div ref={searchResultRef} className="hidden md:flex w-1/2">
        <Input
          value={searchValue} // Controlled input value
          onChange={handleSearchChange} // Handle input change
          placeholder="Search.."
          startContent={<SearchIcon />}
        />
      </div>

      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-4 items-center">
          <Link className="text-default-600" href="/write">
            <WriteIcon />
          </Link>
          <NotificationIcon />
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
      {user ? (
        <NavbarItem className="flex justify-end gap-2">
          <NavbarDropdown />
        </NavbarItem>
      ) : (
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            className="p-2 px-5 rounded-full bg-primaryColor text-white"
            href="/login"
          >
            Get started
          </Link>
        </NavbarItem>
      )}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>

      {/* Search Results Section */}
      {showSearchResultBody && (
        <SearchResults {...{ searchResultRef }} results={searchResults} />
      )}
    </NextUINavbar>
  );
};
