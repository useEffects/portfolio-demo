"use client";

import { CssBaseline, Theme, ThemeOptions } from "@mui/material";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNode, createContext, useContext, useMemo } from "react";
import { ThemeContext } from "./theme";
import { generateThemeConfig } from "@/theme";

export const MyMuiThemeContext = createContext<Theme | null>(null);

export function MyMuiThemeProvider({ children }: { children: ReactNode }) {
    const { theme } = useContext(ThemeContext);
    const muiTheme = useMemo(() => generateThemeConfig(theme), [theme])
    return (
        <MyMuiThemeContext.Provider value={muiTheme as Theme}>
            <MuiThemeProvider theme={muiTheme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </MyMuiThemeContext.Provider>
    );
}