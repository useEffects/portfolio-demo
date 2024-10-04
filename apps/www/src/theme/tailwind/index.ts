import { labels } from "@catppuccin/palette";
import typography from "@tailwindcss/typography";
import { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import { catppuccinColors } from "../catppuccin";

type ColorTheme = {
  [Key in keyof typeof labels]: string;
} & { primary: string };

const allowedLabels = ["red", "peach", "yellow", "green", "blue", "pink", "mauve"] as const;
export const colorThemes: typeof allowedLabels[number][] = allowedLabels.filter(label => label in labels);

export const themes = ["light-red", "light-peach", "light-yellow", "light-green", "light-blue", "light-pink", "light-mauve", "dark-red", "dark-peach", "dark-yellow", "dark-green", "dark-blue", "dark-pink", "dark-mauve"] as const;

const generateThemes = (themeType: "light" | "dark"): Record<typeof themes[number], ColorTheme> => {
  const generatedThemes: Record<typeof themes[number], ColorTheme> = {} as Record<typeof themes[number], ColorTheme>;
  colorThemes.forEach((color, index) => {
    generatedThemes[`${themeType}-${color}`] = { ...catppuccinColors[themeType], primary: catppuccinColors[themeType][color] };
  });

  return generatedThemes;
};

export const catppuccinThemes = {
  ...generateThemes("light"),
  ...generateThemes("dark")
};

export const tailwindConfig: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  important: "#__next",
  corePlugins: {
    preflight: false,
  },
  plugins: [
    createThemes({ ...catppuccinThemes }),
    typography,
  ],
};