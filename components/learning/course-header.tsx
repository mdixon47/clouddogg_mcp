"use client"

import { Button } from "@/components/ui/button"
import { Server, Clock, BookOpen, Users, Medal } from "lucide-react"
import Link from "next/link"

interface CourseHeaderProps {
  slug: string
}

export default function CourseHeader({ slug }: CourseHeaderProps) {
  // This would normally fetch course data based on the slug
  const course = {
    title: "MCP Server Fundamentals",
    description:
      "Learn the core concepts of Model Context Protocol servers and how they enable AI automation across thousands of apps.",
    level: "Beginner",
    duration: "4 hours",
    lessons: 12,
    students: 1245,
    instructor: "John Doe",
    instructorRole: "Senior MCP Engineer, Army Veteran",
    veteranSpecific: false,
    updated: "Last updated June 2023",
  }

  return (
    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <div className="flex items-center mb-4">
            <Link href="/learn/courses" className="text-blue-400 hover:text-blue-300 text-sm">
              Courses
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-400 text-sm">{course.title}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{course.title}</h1>
          <p className="text-xl text-gray-300 mb-6">{course.description}</p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-gray-300">
              <Server className="h-5 w-5 mr-2 text-blue-400" />
              <span>{course.level}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Clock className="h-5 w-5 mr-2 text-blue-400" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <BookOpen className="h-5 w-5 mr-2 text-blue-400" />
              <span>{course.lessons} Lessons</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Users className="h-5 w-5 mr-2 text-blue-400" />
              <span>{course.students} Students</span>
            </div>
            {course.veteranSpecific && (
              <div className="flex items-center text-blue-300">
                <Medal className="h-5 w-5 mr-2 text-blue-400" />
                <span>Veteran-Specific</span>
              </div>
            )}
          </div>

          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div className="ml-3">
              <div className="text-white font-medium">{course.instructor}</div>
              <div className="text-sm text-gray-400">{course.instructorRole}</div>
            </div>
          </div>

          <p className="text-sm text-gray-400">{course.updated}</p>
        </div>

        <div className="md:w-1/3">
          <div className="bg-white/90 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-xl">
            <div className="aspect-video rounded-lg overflow-hidden mb-6 bg-gray-900 flex items-center justify-center">
              <Server className="h-16 w-16 text-blue-400 opacity-50" />
            </div>

            <div className="space-y-4">
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white py-6 text-lg"
                asChild
              >
                <Link href={`/learn/courses/${slug}/lessons/introduction`}>Start Learning</Link>
              </Button>

              <Button
                variant="outline"
                className="w-full dark:border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                asChild
              >
                <Link href={`/learn/courses/${slug}/syllabus`}>View Syllabus</Link>
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-white">This course includes:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mt-1 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0"></div>
                  <span className="ml-3 text-gray-300">4 hours of video content</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0"></div>
                  <span className="ml-3 text-gray-300">12 practical exercises</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0"></div>
                  <span className="ml-3 text-gray-300">Downloadable resources</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0"></div>
                  <span className="ml-3 text-gray-300">Certificate of completion</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0"></div>
                  <span className="ml-3 text-gray-300">Lifetime access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
