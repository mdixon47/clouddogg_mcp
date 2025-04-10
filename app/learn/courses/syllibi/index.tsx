import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"

const courses = [
  {
    id: "mcp-fundamentals",
    title: "MCP Server Fundamentals",
    description:
      "Learn the core concepts of Model Context Protocol servers and how they enable AI automation across thousands of apps.",
    level: "Beginner",
    duration: "4 weeks (16 hours)",
    category: "Technical",
  },
  {
    id: "zapier-integration",
    title: "Zapier Integration Masterclass",
    description: "Connect your MCP server to thousands of apps and create powerful automation workflows.",
    level: "Intermediate",
    duration: "5 weeks (20 hours)",
    category: "Technical",
  },
  {
    id: "ai-prompt-engineering",
    title: "AI Prompt Engineering",
    description: "Master the art of crafting effective prompts to get the most out of your AI automation.",
    level: "Intermediate",
    duration: "4 weeks (16 hours)",
    category: "Technical",
  },
  {
    id: "secure-database",
    title: "Secure Database Integration",
    description: "Learn how to securely connect your MCP server to databases while maintaining compliance.",
    level: "Advanced",
    duration: "6 weeks (24 hours)",
    category: "Technical",
  },
  {
    id: "web-scraping",
    title: "No-Code Web Scraping",
    description: "Extract and process data from websites without writing a single line of code.",
    level: "Beginner",
    duration: "3 weeks (12 hours)",
    category: "Technical",
  },
  {
    id: "security-compliance",
    title: "Security & Compliance for Veterans",
    description: "Special considerations for veteran-owned businesses handling sensitive data.",
    level: "Intermediate",
    duration: "5 weeks (20 hours)",
    category: "Veteran",
  },
  {
    id: "business-automation",
    title: "Automation for Veteran Businesses",
    description: "Specialized automation strategies for veteran-owned businesses across different industries.",
    level: "Beginner",
    duration: "4 weeks (16 hours)",
    category: "Veteran",
  },
  {
    id: "military-to-tech",
    title: "Military to Tech Transition",
    description: "A comprehensive guide for veterans transitioning from military service to technology careers.",
    level: "Beginner",
    duration: "6 weeks (24 hours)",
    category: "Veteran",
  },
  {
    id: "veteran-funding",
    title: "Funding Your Tech Business",
    description: "Learn about funding opportunities specifically available for veteran entrepreneurs.",
    level: "Intermediate",
    duration: "4 weeks (16 hours)",
    category: "Veteran",
  },
]

export default function CourseSyllabiIndex() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">CloudDogg Learning Platform Courses</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Browse our comprehensive course catalog and access detailed syllabi for each course.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="bg-white/90 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{course.title}</CardTitle>
                <Badge
                  variant="outline"
                  className={
                    course.category === "Veteran"
                      ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
                      : "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800"
                  }
                >
                  {course.category}
                </Badge>
              </div>
              <CardDescription className="text-gray-600 dark:text-gray-400 mt-2">{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <Badge
                  className={
                    course.level === "Beginner"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                      : course.level === "Intermediate"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                        : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                  }
                >
                  {course.level}
                </Badge>
              </div>
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white"
                asChild
              >
                <Link href={`/learn/courses/syllabi?tab=${course.id}`}>
                  View Syllabus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
