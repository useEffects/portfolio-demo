import { Shadows, Theme, ThemeOptions, createTheme } from "@mui/material/styles";
import colorsea from "colorsea";
import { colorThemes, themes } from "../tailwind";
import { catppuccinColors } from "..";

export const generateThemeConfig = (theme: typeof themes[number]): Theme => {
  const [themeMode, primaryColor] = theme.split("-") as ["dark" | "light", typeof colorThemes[number]]
  const secondaryColor = "overlay0"
  const commonConfigs: ThemeOptions = {
    shadows: new Array(25).fill("none") as Shadows,
    shape: {
      borderRadius: 0,
    },
    typography: {
      button: {
        textTransform: "none",
      },
    }
  };

  const primaryPalette = catppuccinColors[themeMode][primaryColor];
  const secondaryPalette = catppuccinColors[themeMode][secondaryColor];

  return createTheme({
    ...commonConfigs,
    palette: {
      mode: themeMode,
      primary: {
        light: colorsea(primaryPalette).lighten(5).hex(),
        main: primaryPalette,
        dark: colorsea(primaryPalette).darken(5).hex(),
      },
      secondary: {
        light: colorsea(secondaryPalette).lighten(5).hex(),
        main: secondaryPalette,
        dark: colorsea(secondaryPalette).darken(5).hex(),
      },
      background: {
        default: catppuccinColors[themeMode].base,
        paper: catppuccinColors[themeMode].mantle,
      },
      text: {
        primary: catppuccinColors[themeMode].text,
        secondary: catppuccinColors[themeMode].subtext0,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          colorPrimary: catppuccinColors[themeMode].base,
          root: {
            borderRadius: "9999px"
          }
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "md"
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: catppuccinColors[themeMode].surface0,
            color: catppuccinColors[themeMode].text,
          }
        }
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: catppuccinColors[themeMode].surface0,
          }
        }
      },
    }
  });
};
