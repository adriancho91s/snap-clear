// app/components/ThemeSwitcher.tsx
"use client";

import DarkIcon from "@/utils/themeIcons/dark";
import LightIcon from "@/utils/themeIcons/light";
import { Button } from "@nextui-org/button";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleOnClick = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if(!mounted) return null

  return (
    <>
    {theme === "dark" ? (
      <Button isIconOnly variant="light" onClick={handleOnClick}>
        <LightIcon />
      </Button>
    ) : ( 
      <Button isIconOnly variant="light" onClick={handleOnClick}>
        <DarkIcon />
      </Button>
    )

    }
    </>
  )
}