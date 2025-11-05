import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

interface CaseStudyLayoutProps {
  industry: string
  title: string
  subtitle: string
  heroImage: string
  children: ReactNode
  prevCase?: {
    name: string
    path: string
  }
  nextCase?: {
    name: string
    path: string
  }
}

export default function CaseStudyLayout({
  industry,
  title,
  subtitle,
  heroImage,
  children,
  prevCase,
  nextCase,
}: CaseStudyLayoutProps) {
  return (
    <main className="pt-24 pb-20">
          {/* Hero Section */}
          <div className="relative px-4 md:px-8 py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-30" />
            <div className="absolute inset-0">
              <div className="h-full w-full bg-black/40" />
              <img
                src={heroImage || "/placeholder.svg"}
                alt={`${industry} case study`}
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
              />
            </div>

            <div className="relative max-w-7xl mx-auto">
              <div className="text-center md:text-left md:max-w-3xl">
                <div className="inline-block px-4 py-1 mb-4 bg-blue-500/20 border border-blue-500/30 rounded-full">
                  <span className="text-blue-300 text-sm font-medium">{industry} Case Study</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">{subtitle}</p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                >
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Case Study Content */}
          <div className="px-4 md:px-8 max-w-7xl mx-auto">{children}</div>

          {/* Navigation between case studies */}
          <div className="mt-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              {prevCase ? (
                <Button variant="outline" className="mb-4 sm:mb-0" asChild>
                  <Link href={prevCase.path}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <span>{prevCase.name} Case Study</span>
                  </Link>
                </Button>
              ) : (
                <div></div>
              )}

              {nextCase ? (
                <Button variant="outline" asChild>
                  <Link href={nextCase.path}>
                    <span>{nextCase.name} Case Study</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </main>
  )
}
