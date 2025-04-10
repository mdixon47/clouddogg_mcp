"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ZapierCourseHighlights() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    "Build multi-step automation workflows across different applications",
    "Create custom Zapier integrations for your MCP server",
    "Implement conditional logic and filters in your Zaps",
    "Set up error handling and monitoring for your automations",
    "Optimize performance and reduce API usage costs",
    "Secure your integrations with proper authentication and data protection",
    "Deploy enterprise-grade automation solutions for businesses of all sizes",
    "Special focus on veteran-owned business use cases and applications",
  ]

  return (
    <div
      ref={ref}
      className={`mb-12 transition-all duration-1000 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <h2 className="text-2xl font-bold mb-6 text-white">What You'll Learn</h2>

      <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="ml-3 text-gray-300">{highlight}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Veteran Entrepreneur Focus</h3>
            <p className="text-gray-300">
              This course includes special sections dedicated to veteran entrepreneurs, with specific examples and use
              cases relevant to veteran-owned businesses. Learn how to leverage your military experience and discipline
              to create efficient automation systems for your business.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
