"use client";

import { initialTheme } from "@/lib/contants";
import { themes, colorThemes } from "@/theme";
import { ReactNode, createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
    theme: initialTheme,
    toggleTheme: (mode: "light" | "dark", color: typeof colorThemes[number]) => { },
});

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<typeof themes[number]>(initialTheme);

    useEffect(() => {
        document.querySelector("body")?.setAttribute("data-theme", theme)
    }, [theme])
    return <ThemeContext.Provider value={{
        theme, toggleTheme: (mode: "dark" | "light", color: typeof colorThemes[number]) => {
            const validTheme = `${mode}-${String(color)}` as typeof theme;
            setTheme(validTheme);
        }
    }}>{children}</ThemeContext.Provider>;

}