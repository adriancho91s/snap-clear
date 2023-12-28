"use client";

import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

const DarkIcon = dynamic(() => import('@/utils/themeIcons/dark'));
const LightIcon = dynamic(() => import('@/utils/themeIcons/light'));

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from '@nextui-org/react';

import LanguageChanger from '@/components/LanguageChanger';
import { useTranslation } from 'react-i18next';

import { usePathname } from 'next/navigation';

export default function App() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const handleOnClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const { t: tAppBar } = useTranslation();

  const menuItems = ['removeBackground', 'blog', 'about'];

  const activeHome = pathname === '/' || pathname === '/es';

  return (
    <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen}  isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">Snap Clear</p>
        </NavbarBrand>
      </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem >
            <Link color={activeHome ? 'primary' : 'foreground'} href="/">
              {tAppBar('removeBackground')}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="#"
              color={pathname?.includes('blog') ? 'primary' : 'foreground'}
              >
              {tAppBar('blog')}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color={pathname?.includes('about') ? 'primary' : 'foreground'}
              href="about">
              {tAppBar('about')}
            </Link>
          </NavbarItem>
        </NavbarContent>
      <NavbarContent justify="end" >
        <NavbarItem>
          <LanguageChanger />
        </NavbarItem>
        <NavbarItem>
            <Button isIconOnly variant="light" onClick={handleOnClick}>
              {theme === "dark" && (<LightIcon />)} 
              {theme === "light" && (<DarkIcon />)}
            </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color={'primary'} href="#" variant="flat">
            {tAppBar('share')}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 0 && activeHome
                  ? 'primary'
                  : pathname?.includes(item)
                  ? 'primary'
                  : 'foreground'
              }
              className="w-full"
              href={item === 'removeBackground' ? '/' : `/${item}`}
              size="lg">
              {tAppBar(item)}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

