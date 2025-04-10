"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-800/20 bg-gray-950/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-xl font-bold text-transparent">
                CloudDogg
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
              Home
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
              How It Works
            </Link>
            <Link href="/learn" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
              Learn
            </Link>
            <Link href="/case-studies" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
              Case Studies
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/auth"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-4 text-sm font-medium text-white shadow transition-colors hover:from-blue-700 hover:to-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
            >
              Sign In
            </Link>
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-950/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-gray-900 p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-xl font-bold text-transparent">
                  CloudDogg
                </span>
              </Link>
              <button
                className="rounded-md p-2 text-gray-400 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              <Link
                href="/"
                className="text-lg font-medium text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/how-it-works"
                className="text-lg font-medium text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/learn"
                className="text-lg font-medium text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Learn
              </Link>
              <Link
                href="/case-studies"
                className="text-lg font-medium text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <div className="pt-6 border-t border-gray-800">
                <Link
                  href="/auth"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-4 text-sm font-medium text-white shadow transition-colors hover:from-blue-700 hover:to-purple-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
