"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Server, Zap, MessageCircle, Database, Globe, Shield, Users, Briefcase, BookOpen } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: "mcp-fundamentals",
    title: "MCP Server Fundamentals",
    description: "Learn the core concepts of Model Context Protocol servers and how they enable AI automation.",
    icon: Server,
    color: "from-blue-500 to-cyan-500",
    level: "Beginner",
    duration: "4 hours",
    lessons: 12,
    rating: 4.8,
    reviews: 156,
    veteranSpecific: false,
  },
  {
    id: "zapier-integration",
    title: "Zapier Integration Masterclass",
    description: "Connect your MCP server to thousands of apps and create powerful automation workflows.",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    level: "Intermediate",
    duration: "6 hours",
    lessons: 15,
    rating: 4.7,
    reviews: 124,
    veteranSpecific: false,
  },
  {
    id: "ai-prompt-engineering",
    title: "AI Prompt Engineering",
    description: "Master the art of crafting effective prompts to get the most out of your AI automation.",
    icon: MessageCircle,
    color: "from-green-500 to-emerald-500",
    level: "Intermediate",
    duration: "5 hours",
    lessons: 10,
    rating: 4.9,
    reviews: 98,
    veteranSpecific: false,
  },
  {
    id: "secure-database-integration",
    title: "Secure Database Integration",
    description: "Learn how to securely connect your MCP server to databases while maintaining compliance.",
    icon: Database,
    color: "from-amber-500 to-orange-500",
    level: "Advanced",
    duration: "8 hours",
    lessons: 18,
    rating: 4.6,
    reviews: 87,
    veteranSpecific: false,
  },
  {
    id: "web-scraping-automation",
    title: "No-Code Web Scraping",
    description: "Extract and process data from websites without writing a single line of code.",
    icon: Globe,
    color: "from-red-500 to-rose-500",
    level: "Beginner",
    duration: "3 hours",
    lessons: 8,
    rating: 4.5,
    reviews: 112,
    veteranSpecific: false,
  },
  {
    id: "security-compliance",
    title: "Security & Compliance for Veterans",
    description: "Special considerations for veteran-owned businesses handling sensitive data.",
    icon: Shield,
    color: "from-indigo-500 to-violet-500",
    level: "Intermediate",
    duration: "7 hours",
    lessons: 14,
    rating: 4.8,
    reviews: 76,
    veteranSpecific: true,
  },
  {
    id: "veteran-business-automation",
    title: "Automation for Veteran Businesses",
    description: "Specialized automation strategies for veteran-owned businesses across different industries.",
    icon: Users,
    color: "from-blue-600 to-cyan-600",
    level: "Beginner",
    duration: "5 hours",
    lessons: 12,
    rating: 4.9,
    reviews: 64,
    veteranSpecific: true,
  },
  {
    id: "military-to-tech",
    title: "Military to Tech Transition",
    description: "A comprehensive guide for veterans transitioning from military service to technology careers.",
    icon: Briefcase,
    color: "from-green-600 to-emerald-600",
    level: "Beginner",
    duration: "6 hours",
    lessons: 14,
    rating: 4.7,
    reviews: 92,
    veteranSpecific: true,
  },
  {
    id: "veteran-funding",
    title: "Funding Your Tech Business",
    description: "Learn about funding opportunities specifically available for veteran entrepreneurs.",
    icon: BookOpen,
    color: "from-amber-600 to-orange-600",
    level: "Intermediate",
    duration: "4 hours",
    lessons: 10,
    rating: 4.6,
    reviews: 58,
    veteranSpecific: true,
  },
]

export default function CourseGrid() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <Card
          key={course.id}
          className={`bg-gray-800/50 border-gray-700 overflow-hidden transition-all duration-700 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <CardContent className="p-0">
            <div className={`h-2 w-full bg-gradient-to-r ${course.color}`}></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${course.color} flex items-center justify-center`}
                >
                  <course.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300">{course.level}</span>
                  <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300">{course.duration}</span>
                  {course.veteranSpecific && (
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                      Veteran
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{course.title}</h3>
              <p className="text-gray-400 mb-4">{course.description}</p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">{course.lessons} Lessons</span>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(course.rating) ? "text-yellow-400" : "text-gray-600"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-1 text-sm text-gray-400">({course.reviews})</span>
                </div>
              </div>

              <Button className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 text-white`} asChild>
                <Link href={`/learn/courses/${course.id}`}>View Course</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
