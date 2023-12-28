"use client";

import DarkIcon from "@/utils/themeIcons/dark";
import LightIcon from "@/utils/themeIcons/light";
import { Button } from "@nextui-org/button";
import {useTheme} from "next-themes";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleOnClick = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <>
    {theme === "dark" && (
      <Button isIconOnly variant="light" onClick={handleOnClick}>
        <LightIcon />
      </Button>
    )}
    {theme === "light" && (
      <Button isIconOnly  onClick={handleOnClick}>
        <DarkIcon />
      </Button>
    )}
    </>
  )
}