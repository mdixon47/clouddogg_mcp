"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Server, Zap, MessageCircle, Database, Globe, Shield } from "lucide-react"
import Link from "next/link"

const featuredCourses = [
  {
    id: "mcp-fundamentals",
    title: "MCP Server Fundamentals",
    description: "Learn the core concepts of Model Context Protocol servers and how they enable AI automation.",
    icon: Server,
    color: "from-blue-500 to-cyan-500",
    level: "Beginner",
    duration: "4 hours",
    lessons: 12,
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
  },
]

export default function FeaturedCourses() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Courses
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Start your learning journey with our most popular courses designed for veteran entrepreneurs.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
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
                      <span className="px-2 py-1 bg-gray-300/50 dark:bg-gray-700/50 rounded-full text-xs text-gray-300">
                        {course.level}
                      </span>
                      <span className="px-2 py-1 bg-gray-300/50 dark:bg-gray-700/50 rounded-full text-xs text-gray-300">
                        {course.duration}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{course.title}</h3>
                  <p className="text-gray-400 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{course.lessons} Lessons</span>
                    <Button
                      size="sm"
                      className={`bg-gradient-to-r ${course.color} hover:opacity-90 text-white`}
                      asChild
                    >
                      <Link href={`/learn/courses/${course.id}`}>View Course</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            asChild
          >
            <Link href="/learn/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
