import { CatppuccinProvider } from "@/context/catppuccin";
import { ThemeProvider } from "@/context/theme";
import "./global.css";
import "./tailwind.css";
import { MyMuiThemeProvider } from "@/context/mui";
import { DocumentTitle } from "@/components/document-title";
import SessionProvider from "@/components/session-provider";
import { Container } from "@mui/material";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" id="__next">
      <DocumentTitle />
      <body>
        <SessionProvider>
          <ThemeProvider>
            <MyMuiThemeProvider>
              <CatppuccinProvider>
                <div className="flex flex-col items-center gap-4">
                  <Container>
                    <Navbar />
                  </Container>
                  {children}
                  <Analytics />
                  <SpeedInsights />
                </div>
              </CatppuccinProvider>
            </MyMuiThemeProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}