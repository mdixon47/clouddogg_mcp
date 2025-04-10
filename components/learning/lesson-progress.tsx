"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import Link from "next/link"

interface LessonProgressProps {
  courseSlug: string
  lessonSlug: string
}

export default function LessonProgress({ courseSlug, lessonSlug }: LessonProgressProps) {
  // This would normally fetch course and lesson data based on the slugs
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
    totalLessons: 9,
    completedLessons: 2,
  }

  // Find current lesson index
  let currentModuleIndex = 0
  let currentLessonIndex = 0
  let currentLessonNumber = 0
  let found = false

  for (let i = 0; i < course.modules.length; i++) {
    for (let j = 0; j < course.modules[i].lessons.length; j++) {
      currentLessonNumber++
      if (course.modules[i].lessons[j].slug === lessonSlug) {
        currentModuleIndex = i
        currentLessonIndex = j
        found = true
        break
      }
    }
    if (found) break
  }

  // Calculate previous and next lessons
  let prevLesson = null
  let nextLesson = null

  if (currentLessonIndex > 0) {
    prevLesson = course.modules[currentModuleIndex].lessons[currentLessonIndex - 1]
  } else if (currentModuleIndex > 0) {
    const prevModule = course.modules[currentModuleIndex - 1]
    prevLesson = prevModule.lessons[prevModule.lessons.length - 1]
  }

  if (currentLessonIndex < course.modules[currentModuleIndex].lessons.length - 1) {
    nextLesson = course.modules[currentModuleIndex].lessons[currentLessonIndex + 1]
  } else if (currentModuleIndex < course.modules.length - 1) {
    nextLesson = course.modules[currentModuleIndex + 1].lessons[0]
  }

  const [isCompleted, setIsCompleted] = useState(false)
  const progressPercentage = Math.round((course.completedLessons / course.totalLessons) * 100)

  const markAsComplete = () => {
    setIsCompleted(true)
    // In a real application, this would send a request to update the user's progress
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            {prevLesson ? (
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                asChild
              >
                <Link href={`/learn/courses/${courseSlug}/lessons/${prevLesson.slug}`}>
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Link>
              </Button>
            ) : (
              <Button variant="outline" className="border-gray-700 text-gray-500" disabled>
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
            )}

            {isCompleted ? (
              <Button
                variant="outline"
                className="border-green-600 bg-green-600/20 text-green-400 hover:bg-green-600/30 hover:text-green-300"
                disabled
              >
                <CheckCircle className="h-4 w-4 mr-1" />
                Completed
              </Button>
            ) : (
              <Button
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white"
                onClick={markAsComplete}
              >
                Mark as Complete
              </Button>
            )}

            {nextLesson ? (
              <Button
                variant={isCompleted ? "default" : "outline"}
                className={
                  isCompleted
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white"
                    : "border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                }
                asChild
              >
                <Link href={`/learn/courses/${courseSlug}/lessons/${nextLesson.slug}`}>
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            ) : (
              <Button
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white"
                asChild
              >
                <Link href={`/learn/courses/${courseSlug}`}>Finish Course</Link>
              </Button>
            )}
          </div>

          <div className="hidden md:flex items-center gap-4 flex-1 max-w-md">
            <div className="text-sm text-gray-400">
              <span className="text-white">{currentLessonNumber}</span> of {course.totalLessons}
            </div>
            <Progress value={progressPercentage} className="h-2 bg-gray-700" />
            <div className="text-sm text-gray-400">{progressPercentage}%</div>
          </div>

          <div className="flex md:hidden w-full mt-2">
            <Progress value={progressPercentage} className="h-2 bg-gray-700 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
