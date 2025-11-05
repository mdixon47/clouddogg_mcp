"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react"
import Link from "next/link"

interface LessonNavigationProps {
  courseSlug: string
  lessonSlug: string
  moduleIndex?: number
  lessonIndex?: number
  totalModules?: number
  totalLessons?: number
  nextLesson?: { title: string; slug: string } | null
  prevLesson?: { title: string; slug: string } | null
  accentColor?: string
}

export default function LessonNavigation({
  courseSlug,
  lessonSlug,
  moduleIndex: _moduleIndex = 0,
  lessonIndex: _lessonIndex = 0,
  totalModules: _totalModules = 4,
  totalLessons: _totalLessons = 12,
  nextLesson = null,
  prevLesson = null,
  accentColor: _accentColor = "blue"
}: LessonNavigationProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // This would normally fetch course data based on the slug
  const course = {
    title: "MCP Server Fundamentals",
    modules: [
      {
        title: "Getting Started",
        lessons: [
          { slug: "introduction", title: "Introduction to MCP" },
          { slug: "setup", title: "Setting Up Your Environment" },
          { slug: "architecture", title: "MCP Architecture Overview" },
        ],
      },
      {
        title: "Core Concepts",
        lessons: [
          { slug: "context-protocol", title: "Understanding Context Protocol" },
          { slug: "ai-models", title: "Working with AI Models" },
          { slug: "zapier-integration", title: "Zapier Integration Basics" },
        ],
      },
      {
        title: "Practical Applications",
        lessons: [
          { slug: "first-automation", title: "Building Your First Automation" },
          { slug: "security", title: "Security Best Practices" },
          { slug: "scaling", title: "Scaling Your MCP Server" },
        ],
      },
    ],
  }

  // Find current lesson index
  let currentModuleIndex = 0
  let currentLessonIndex = 0
  let found = false

  for (let i = 0; i < course.modules.length; i++) {
    for (let j = 0; j < course.modules[i].lessons.length; j++) {
      if (course.modules[i].lessons[j].slug === lessonSlug) {
        currentModuleIndex = i
        currentLessonIndex = j
        found = true
        break
      }
    }
    if (found) break
  }

  // Calculate previous and next lessons (use props if provided, otherwise calculate)
  let calculatedPrevLesson = prevLesson
  let calculatedNextLesson = nextLesson

  if (!calculatedPrevLesson) {
    if (currentLessonIndex > 0) {
      calculatedPrevLesson = course.modules[currentModuleIndex].lessons[currentLessonIndex - 1]
    } else if (currentModuleIndex > 0) {
      const prevModule = course.modules[currentModuleIndex - 1]
      calculatedPrevLesson = prevModule.lessons[prevModule.lessons.length - 1]
    }
  }

  if (!calculatedNextLesson) {
    if (currentLessonIndex < course.modules[currentModuleIndex].lessons.length - 1) {
      calculatedNextLesson = course.modules[currentModuleIndex].lessons[currentLessonIndex + 1]
    } else if (currentModuleIndex < course.modules.length - 1) {
      calculatedNextLesson = course.modules[currentModuleIndex + 1].lessons[0]
    }
  }

  return (
    <>
      <div className="bg-gray-900 border-b border-gray-800 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 text-gray-400 hover:text-white md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Link
              href={`/learn/courses/${courseSlug}`}
              className="text-blue-400 hover:text-blue-300 text-sm hidden md:block"
            >
              {course.title}
            </Link>
            <span className="mx-2 text-gray-500 hidden md:block">/</span>
            <span className="text-gray-300 text-sm truncate">
              {course.modules[currentModuleIndex].lessons[currentLessonIndex].title}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {calculatedPrevLesson ? (
              <Button
                variant="outline"
                size="sm"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                asChild
              >
                <Link href={`/learn/courses/${courseSlug}/lessons/${calculatedPrevLesson.slug}`}>
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  <span className="hidden md:inline">Previous</span>
                </Link>
              </Button>
            ) : (
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-500" disabled>
                <ChevronLeft className="h-4 w-4 mr-1" />
                <span className="hidden md:inline">Previous</span>
              </Button>
            )}

            {calculatedNextLesson ? (
              <Button
                variant="outline"
                size="sm"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                asChild
              >
                <Link href={`/learn/courses/${courseSlug}/lessons/${calculatedNextLesson.slug}`}>
                  <span className="hidden md:inline">Next</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            ) : (
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-500" disabled>
                <span className="hidden md:inline">Next</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsSidebarOpen(false)}></div>
          <div className="absolute top-0 left-0 bottom-0 w-64 bg-gray-900 border-r border-gray-800 overflow-y-auto">
            <div className="p-4 border-b border-gray-800">
              <h2 className="text-lg font-bold text-white">{course.title}</h2>
            </div>

            <div className="p-4">
              {course.modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className="mb-6">
                  <h3 className="text-sm font-medium text-gray-400 mb-2">{module.title}</h3>
                  <ul className="space-y-1">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex}>
                        <Link
                          href={`/learn/courses/${courseSlug}/lessons/${lesson.slug}`}
                          className={`block px-3 py-2 rounded-lg ${
                            lesson.slug === lessonSlug
                              ? "bg-blue-500/20 text-blue-300"
                              : "text-gray-300 hover:bg-gray-800 hover:text-white"
                          }`}
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          {lesson.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
