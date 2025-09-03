"use client"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white light:border-gray-300 light:text-gray-700 light:hover:bg-gray-100 light:hover:text-gray-900 transition-all duration-300 hover:scale-105 active:scale-95"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 hover:rotate-12" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 hover:-rotate-12" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
