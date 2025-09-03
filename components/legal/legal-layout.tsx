"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, Shield, Eye, Cookie, FileText, ChevronRight, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

interface LegalLayoutProps {
  children: React.ReactNode
  title: string
  description: string
  lastUpdated: string
  readTime: string
  icon: React.ReactNode
  sections: Array<{
    id: string
    title: string
    subsections?: Array<{ id: string; title: string }>
  }>
}

export default function LegalLayout({
  children,
  title,
  description,
  lastUpdated,
  readTime,
  icon,
  sections
}: LegalLayoutProps) {
  const [activeSection, setActiveSection] = useState("")
  const [readingProgress, setReadingProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(progress)
      setShowBackToTop(scrollTop > 500)

      // Update active section based on scroll position
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean)

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 text-gray-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-32 pb-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/20 text-blue-300 mb-6">
                {icon}
                <span className="ml-2 text-sm font-medium">Legal Document</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                {title}
              </h1>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                {description}
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Last updated: {lastUpdated}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Reading time: {readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Applies to all users</span>
                </div>
              </div>
            </motion.div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <Card className="sticky top-24 bg-gray-900/50 border-gray-700 backdrop-blur-sm">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-400" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section, index) => (
                      <div key={section.id}>
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                            activeSection === section.id
                              ? "bg-blue-500/20 text-blue-300 border-l-2 border-blue-500"
                              : "text-gray-400 hover:text-gray-300 hover:bg-gray-800/50"
                          }`}
                        >
                          <span className="text-xs font-mono text-gray-500">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="text-sm">{section.title}</span>
                          <ChevronRight className="h-3 w-3 ml-auto" />
                        </button>
                        {section.subsections && activeSection === section.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-6 mt-2 space-y-1"
                          >
                            {section.subsections.map((subsection) => (
                              <button
                                key={subsection.id}
                                onClick={() => scrollToSection(subsection.id)}
                                className="w-full text-left px-2 py-1 text-xs text-gray-500 hover:text-gray-400 transition-colors"
                              >
                                {subsection.title}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </Card>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <Card className="bg-gray-900/30 border-gray-700 backdrop-blur-sm">
                <div className="p-8 md:p-12">
                  {children}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-3">
          <AnimatePresence>
            {showBackToTop && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <Button
                  onClick={scrollToTop}
                  size="sm"
                  className="rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Legal Pages Quick Links */}
          <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm p-3">
            <div className="flex flex-col gap-2">
              <Link href="/privacy" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50">
                <Shield className="h-4 w-4" />
                Privacy
              </Link>
              <Link href="/terms" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50">
                <FileText className="h-4 w-4" />
                Terms
              </Link>
              <Link href="/cookies" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50">
                <Cookie className="h-4 w-4" />
                Cookies
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
