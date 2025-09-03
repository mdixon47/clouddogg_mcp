import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeScript, ClientThemeScript } from "@/components/theme-script"
import { ErrorBoundary, SectionErrorBoundary } from "@/components/error-boundary"

export const metadata: Metadata = {
  title: "CloudDogg MCP - AI Automation Platform",
  description: "Connect your AI to everything. Automate anything with CloudDogg's MCP server.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme script to prevent FOUC - now using Next.js Script component */}
        <ThemeScript />
      </head>
      <body>
        <ErrorBoundary>
          <ThemeProvider defaultTheme="dark">
            <ClientThemeScript />
            <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
              <div className="relative overflow-hidden">
                {/* Background glow effects */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

                <SectionErrorBoundary sectionName="Header">
                  <Header />
                </SectionErrorBoundary>

                <ErrorBoundary>
                  <main>{children}</main>
                </ErrorBoundary>

                <SectionErrorBoundary sectionName="Footer">
                  <Footer />
                </SectionErrorBoundary>

                <SectionErrorBoundary sectionName="Cookie Banner">
                  <CookieBanner />
                </SectionErrorBoundary>
              </div>
            </div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
