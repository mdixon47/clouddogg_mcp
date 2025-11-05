"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Play, FileText, CheckCircle, Lock } from "lucide-react"
import Link from "next/link"

// Add the import for the AI prompt engineering course components
import AIPromptCourseOverview from "@/components/learning/ai-prompt-course/ai-prompt-course-overview"
import AIPromptCourseHighlights from "@/components/learning/ai-prompt-course/ai-prompt-course-highlights"

// In the CourseContent component, add a case for the AI prompt engineering course
export default function CourseContent({ courseSlug }: { courseSlug: string }) {
  switch (courseSlug) {
    case "zapier-integration":
      return (
        <div>
          {/* <ZapierCourseOverview />
          <ZapierCourseHighlights />
          <ZapierCourseRequirements /> */}
        </div>
      )
    case "ai-prompt-engineering":
      return (
        <div>
          <AIPromptCourseOverview />
          <AIPromptCourseHighlights />
        </div>
      )
    default:
      return (
        <div className="prose prose-invert max-w-none mb-12 light:prose-light">
          <p>
            This comprehensive course will guide you through everything you need to know about{" "}
            {courseSlug?.split("-").join(" ") || "this course"}. From the fundamentals to advanced techniques, you'll gain practical
            skills that you can apply immediately.
          </p>
          <p>
            Our expert instructors, including veterans with real-world experience, will guide you through each module
            with clear explanations, practical examples, and hands-on exercises.
          </p>
          <p>
            By the end of this course, you'll have the knowledge and confidence to implement these skills in your own
            business or career, whether you're a veteran entrepreneur or a professional looking to advance your skills.
          </p>
        </div>
      )
  }
}

interface CourseContentProps {
  courseSlug: string
}

// Default course content component (not currently used but kept for reference)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function DefaultCourseContent({ courseSlug }: CourseContentProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // This would normally fetch course data based on the slug
  const course = {
    modules: [
      {
        title: "Getting Started",
        description: "Learn the basics of MCP and set up your environment",
        lessons: [
          {
            title: "Introduction to MCP",
            duration: "8:24",
            type: "video",
            isPreview: true,
            isCompleted: false,
          },
          {
            title: "Setting Up Your Environment",
            duration: "12:15",
            type: "video",
            isPreview: false,
            isCompleted: false,
          },
          {
            title: "MCP Architecture Overview",
            duration: "15:30",
            type: "video",
            isPreview: false,
            isCompleted: false,
          },
          {
            title: "Module 1 Quiz",
            type: "quiz",
            isPreview: false,
            isCompleted: false,
          },
        ],
      },
      {
        title: "Core Concepts",
        description: "Understand the fundamental concepts of MCP",
        lessons: [
          {
            title: "Understanding Context Protocol",
            duration: "14:18",
            type: "video",
            isPreview: false,
            isCompleted: false,
          },
          {
            title: "Working with AI Models",
            duration: "18:45",
            type: "video",
            isPreview: false,
            isCompleted: false,
          },
          {
            title: "Zapier Integration Basics",
            duration: "16:22",
            type: "video",
            isPreview: true,
            isCompleted: false,
          },
          {
            title: "Hands-on Exercise: Your First Integration",
            type: "exercise",
            isPreview: false,
            isCompleted: false,
          },
          {
            title: "Module 2 Quiz",
            type: "quiz",
            isPreview: false,
            isCompleted: false,
          },
        ],
      },
      {
        title: "Practical Applications",
        description: "Apply MCP in real-world scenarios",
        lessons: [
          {
            title: "Building Your First Automation",
            duration: "20:15",
            type: "video",
            isPreview: false,
            isCompleted: false,
          },
          {
            title: "Security Best Practices",
            duration: "17:30",
            type: "video",
            isPreview: false,
            isCompleted: false,
          },
          {
            title: "Scaling Your MCP Server",
            duration: "19:45",
            type: "video",
            isPreview: false,
            isCompleted: false,
          },
          {
            title: "Case Study: Veteran-Owned Business",
            duration: "22:10",
            type: "video",
            isPreview: true,
            isCompleted: false,
          },
          {
            title: "Final Project",
            type: "project",
            isPreview: false,
            isCompleted: false,
          },
          {
            title: "Final Quiz",
            type: "quiz",
            isPreview: false,
            isCompleted: false,
          },
        ],
      },
    ],
  }

  const [expandedModules, setExpandedModules] = useState<number[]>([0])

  const toggleModule = (index: number) => {
    if (expandedModules.includes(index)) {
      setExpandedModules(expandedModules.filter((i) => i !== index))
    } else {
      setExpandedModules([...expandedModules, index])
    }
  }

  return (
    <div
      ref={ref}
      className={`mb-12 transition-all duration-1000 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <h2 className="text-2xl font-bold mb-6 text-white">Course Content</h2>

      <div className="space-y-4">
        {course.modules.map((module, moduleIndex) => (
          <Card key={moduleIndex} className="bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden">
            <div
              className="p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleModule(moduleIndex)}
            >
              <div>
                <h3 className="text-lg font-semibold text-white">{module.title}</h3>
                <p className="text-gray-400 text-sm">{module.description}</p>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-400 mr-4">{module.lessons.length} lessons</span>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                  {expandedModules.includes(moduleIndex) ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>

            {expandedModules.includes(moduleIndex) && (
              <CardContent className="pt-0 pb-4 px-4">
                <ul className="divide-y divide-gray-700">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="py-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          {lesson.isCompleted ? (
                            <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                          ) : lesson.isPreview ? (
                            <Play className="h-5 w-5 text-blue-400 mr-3" />
                          ) : (
                            <Lock className="h-5 w-5 text-gray-500 mr-3" />
                          )}

                          <div>
                            <div className="flex items-center">
                              <span className="text-gray-300">{lesson.title}</span>
                              {lesson.isPreview && (
                                <span className="ml-2 px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                                  Preview
                                </span>
                              )}
                            </div>

                            <div className="flex items-center mt-1">
                              {lesson.type === "video" && (
                                <span className="text-xs text-gray-400">
                                  <Play className="h-3 w-3 inline mr-1" />
                                  Video • {lesson.duration}
                                </span>
                              )}

                              {lesson.type === "quiz" && (
                                <span className="text-xs text-gray-400">
                                  <FileText className="h-3 w-3 inline mr-1" />
                                  Quiz
                                </span>
                              )}

                              {lesson.type === "exercise" && (
                                <span className="text-xs text-gray-400">
                                  <FileText className="h-3 w-3 inline mr-1" />
                                  Exercise
                                </span>
                              )}

                              {lesson.type === "project" && (
                                <span className="text-xs text-gray-400">
                                  <FileText className="h-3 w-3 inline mr-1" />
                                  Project
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {(lesson.isPreview || lesson.isCompleted) && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                            asChild
                          >
                            <Link
                              href={`/learn/courses/${courseSlug}/lessons/${lesson.title.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {lesson.isCompleted ? "Revisit" : "Preview"}
                            </Link>
                          </Button>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
