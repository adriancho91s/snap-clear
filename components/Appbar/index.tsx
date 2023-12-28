'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import LanguageChanger from '@/components/LanguageChanger';
import { useTranslation } from "react-i18next";

import { usePathname } from "next/navigation";

export default function App() {

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 900;

  const { t: tAppBar } = useTranslation();

  const menuItems = [
    "removeBackground",
    "blog",
    "about"
  ];

  const activeHome = pathname === "/" || pathname === "/es";

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered >
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">Snap Clear</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className={`${isMobile ? "hidden" : "" }sm:flex gap-4`} justify="center">
        <NavbarItem aria-current="page">
          <Link color={activeHome ? "primary" : "foreground"}  href="/">
            {tAppBar("removeBackground")}
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#" color={pathname.includes("blog") ? "primary" : "foreground"} aria-current="page" >
            {tAppBar("blog")}
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color={pathname.includes("about") ? "primary" : "foreground"} href="about">
            {tAppBar("about")}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem >
            <LanguageChanger />
        </NavbarItem>
        <NavbarItem>
            <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color={"primary"} href="#" variant="flat">
            {tAppBar("share")}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className={isMobile ? "" : "hidden"}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 0 && activeHome ? "primary" : pathname.includes(item) ? "primary" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {tAppBar(item)}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
