"use client";

import { ReactNode, createContext, useContext, useMemo } from "react";
import { ThemeContext } from "./theme";
import { catppuccinThemes } from "@/theme";

export const CatppuccinContext = createContext(catppuccinThemes["dark-mauve"]);
export function CatppuccinProvider({ children }: { children: ReactNode }) {
    const { theme } = useContext(ThemeContext);
    const catppuccinColor = useMemo(() => catppuccinThemes[theme], [theme]);
    return <CatppuccinContext.Provider value={catppuccinColor}>{children}</CatppuccinContext.Provider>;
}