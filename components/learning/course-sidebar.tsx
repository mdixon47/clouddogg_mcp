"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, BookOpen, Users, Award, Download, CheckCircle } from "lucide-react"
import Link from "next/link"

interface CourseSidebarProps {
  slug: string
}

export default function CourseSidebar({ slug }: CourseSidebarProps) {
  // This would normally fetch course data based on the slug
  const course = {
    price: "$99",
    veteranPrice: "$49.50",
    duration: "4 hours",
    lessons: 12,
    students: 1245,
    level: "Beginner",
    lastUpdated: "June 2023",
    includes: [
      "4 hours of video content",
      "12 practical exercises",
      "Downloadable resources",
      "Certificate of completion",
      "Lifetime access",
      "Community access",
    ],
    materials: [
      { name: "Course Syllabus", size: "1.2 MB" },
      { name: "MCP Setup Guide", size: "3.5 MB" },
      { name: "Automation Templates", size: "2.8 MB" },
    ],
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden">
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 line-through">{course.price}</span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                Veteran Discount
              </span>
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-white">{course.veteranPrice}</span>
              <span className="ml-2 text-gray-400">for veterans</span>
            </div>
          </div>

          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white mb-4"
            asChild
          >
            <Link href={`/learn/courses/${slug}/enroll`}>Enroll Now</Link>
          </Button>

          <Button
            variant="outline"
            className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            asChild
          >
            <Link href={`/learn/courses/${slug}/lessons/introduction`}>Preview Course</Link>
          </Button>

          <div className="mt-6 pt-6 border-t border-gray-700 space-y-4">
            <div className="flex justify-between">
              <div className="flex items-center text-gray-300">
                <Clock className="h-5 w-5 mr-2 text-blue-400" />
                <span>Duration</span>
              </div>
              <span className="text-white">{course.duration}</span>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center text-gray-300">
                <BookOpen className="h-5 w-5 mr-2 text-blue-400" />
                <span>Lessons</span>
              </div>
              <span className="text-white">{course.lessons}</span>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center text-gray-300">
                <Users className="h-5 w-5 mr-2 text-blue-400" />
                <span>Enrolled</span>
              </div>
              <span className="text-white">{course.students} students</span>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center text-gray-300">
                <Award className="h-5 w-5 mr-2 text-blue-400" />
                <span>Level</span>
              </div>
              <span className="text-white">{course.level}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-white">This course includes:</h3>
          <ul className="space-y-3">
            {course.includes.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Course Materials</h3>
          <ul className="space-y-3">
            {course.materials.map((material, index) => (
              <li key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center">
                  <Download className="h-5 w-5 mr-3 text-blue-400" />
                  <span className="text-gray-300">{material.name}</span>
                </div>
                <span className="text-sm text-gray-400">{material.size}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
