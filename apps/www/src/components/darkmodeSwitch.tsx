"use client"

import { CatppuccinContext } from "@/context/catppuccin"
import { useContext, useEffect, useState } from "react"
import { DarkModeSwitch } from "react-toggle-dark-mode"
import { ThemeContext } from "@/context/theme"
import { colorThemes } from "@/theme"
import { IconButton } from "@mui/material"

export default function DarkModeSwitcher() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const [darkMode, setDarkMode] = useState(theme.split("-")[0] === "dark")
    const [colorMode, setColorMode] = useState(theme.split("-")[1] as typeof colorThemes[number])
    const catppuccinColor = useContext(CatppuccinContext)

    useEffect(() => {
        toggleTheme(darkMode ? "dark" : "light", colorMode)
    }, [darkMode, colorMode])

    return <div className="flex gap-4">
        <IconButton onClick={() => setDarkMode(p => !p)}>
            <DarkModeSwitch
                sunColor={catppuccinColor.peach}
                moonColor={catppuccinColor.yellow}
                checked={darkMode}
                onChange={() => { }}
            />
        </IconButton>
        <div className="flex gap-2 items-center">
            {colorThemes.map((color, i) => <div style={{ background: catppuccinColor[color], height: color === colorMode ? "1.5rem" : undefined }} className="h-4 w-4 rounded cursor-pointer" onClick={() => setColorMode(color)} key={i}></div>)}
        </div>
    </div>
}