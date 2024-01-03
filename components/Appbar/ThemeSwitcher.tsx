'use client'

import { useTheme } from 'next-themes'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { ThemeIcon } from '@/utils/themeIcons/ThemeIcon'
import LightIcon from '@/utils/themeIcons/LightIcon'
import DarkIcon from '@/utils/themeIcons/DarkIcon'
import { SystemIcon } from '@/utils/themeIcons/SystemIcon'

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()


  return (
    <Dropdown>
        <DropdownTrigger>
            <Button isIconOnly variant="light">
                <ThemeIcon />
            </Button>
        </DropdownTrigger>
        <DropdownMenu
            aria-label="Dropdown Variants"
            color="primary"
            onAction={(key) => setTheme(key as string)}
            key={theme}
        >
            <DropdownItem key="system">
                <SystemIcon />
            </DropdownItem>
            <DropdownItem key="light">
                <LightIcon />
            </DropdownItem>
            <DropdownItem key="dark">
                <DarkIcon />
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>
  )
}

export default ThemeSwitch