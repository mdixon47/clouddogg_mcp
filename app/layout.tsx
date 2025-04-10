import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeScript } from "@/components/theme-script"

export const metadata: Metadata = {
  title: "CloudDogg - AI Automation Platform",
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
        {/* Add script to set theme before page renders */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.classList.add(savedTheme);
                } catch (e) {
                  console.error('Failed to set theme:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider defaultTheme="dark">
          <ThemeScript />
          <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
            <div className="relative overflow-hidden">
              {/* Background glow effects */}
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

              <Header />
              <main>{children}</main>
              <Footer />
              <CookieBanner />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
