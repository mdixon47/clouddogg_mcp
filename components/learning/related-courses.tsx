"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, MessageCircle, Database } from "lucide-react"
import Link from "next/link"

interface RelatedCoursesProps {
  slug: string
}

export default function RelatedCourses({ slug: _slug }: RelatedCoursesProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // This would normally fetch related courses based on the current course slug
  const relatedCourses = [
    {
      id: "zapier-integration",
      title: "Zapier Integration Masterclass",
      description: "Connect your MCP server to thousands of apps and create powerful automation workflows.",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      level: "Intermediate",
      duration: "6 hours",
    },
    {
      id: "ai-prompt-engineering",
      title: "AI Prompt Engineering",
      description: "Master the art of crafting effective prompts to get the most out of your AI automation.",
      icon: MessageCircle,
      color: "from-green-500 to-emerald-500",
      level: "Intermediate",
      duration: "5 hours",
    },
    {
      id: "secure-database-integration",
      title: "Secure Database Integration",
      description: "Learn how to securely connect your MCP server to databases while maintaining compliance.",
      icon: Database,
      color: "from-amber-500 to-orange-500",
      level: "Advanced",
      duration: "8 hours",
    },
  ]

  return (
    <div
      ref={ref}
      className={`mt-12 transition-all duration-1000 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <h2 className="text-2xl font-bold mb-6 text-white">Related Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedCourses.map((course) => (
          <Card key={course.id} className="bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden">
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
                    <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300">
                      {course.duration}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{course.title}</h3>
                <p className="text-gray-400 mb-4">{course.description}</p>

                <Button className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 text-white`} asChild>
                  <Link href={`/learn/courses/${course.id}`}>View Course</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
