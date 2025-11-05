"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Medal } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full border-b border-gray-800/20 bg-gray-950/80 backdrop-blur-md fixed top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent pb-1">
              CloudDogg
            </span>
            <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-md">
              MCP
            </span>
          </Link>

          {/* Combined Navigation and Actions */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="/learn" className="text-gray-300 hover:text-white transition-colors">
              Learn
            </Link>
            <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link
              href="/veteran-program"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <Medal className="h-4 w-4 mr-1" />
              Veterans
            </Link>
            <ThemeToggle />
            <Link
              href="/auth"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
