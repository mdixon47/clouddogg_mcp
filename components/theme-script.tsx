"use client"

import { useEffect } from "react"

export function ThemeScript() {
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      // Get theme from localStorage or default to dark
      const savedTheme = localStorage.getItem("theme") || "dark"

      // Apply theme class to document element
      document.documentElement.classList.remove("dark", "light")
      document.documentElement.classList.add(savedTheme)
    }
  }, [])

  return null
}
