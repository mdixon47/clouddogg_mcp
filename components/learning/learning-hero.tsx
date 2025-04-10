"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Medal, BookOpen, Users } from "lucide-react"
import Link from "next/link"

export default function LearningHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className={`md:w-1/2 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 mb-6">
              <Medal className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Veteran-Owned, Veteran-Focused</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-6">
              Master MCP Servers & AI Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Specialized training for veteran entrepreneurs to leverage cutting-edge technology in their businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <Link href="/learn/courses">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg rounded-xl flex items-center"
                asChild
              >
                <Link href="/learn/veteran-entrepreneurs">
                  <Users className="mr-2 h-5 w-5" />
                  Veteran Program
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-gray-900"
                  ></div>
                ))}
              </div>
              <p className="ml-4 text-gray-400">
                <span className="text-white font-medium">500+</span> veterans enrolled
              </p>
            </div>
          </div>
          <div
            className={`md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-3xl p-6 shadow-2xl">
                <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gray-900 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-blue-400 opacity-50" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">MCP Server Fundamentals</h3>
                <p className="text-gray-300 mb-4">
                  Learn the core concepts of Model Context Protocol servers and how they enable AI automation across
                  thousands of apps.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold">
                      JD
                    </div>
                    <span className="ml-2 text-gray-300 text-sm">John Doe, Instructor</span>
                  </div>
                  <div className="text-sm text-gray-400">12 Lessons</div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                    </div>
                    <span className="ml-2 text-gray-400 text-sm">75% Complete</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
