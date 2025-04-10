"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, Award, BarChart } from "lucide-react"

export default function ZapierCourseOverview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`mb-12 transition-all duration-1000 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <h2 className="text-2xl font-bold mb-6 text-white">Course Overview</h2>

      <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden">
        <CardContent className="p-6">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            The Zapier Integration Masterclass is designed to help you harness the full power of the Model Context
            Protocol (MCP) by connecting your AI to thousands of applications through Zapier. This comprehensive course
            will take you from the basics of Zapier integration to advanced automation workflows that can transform your
            business operations.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Whether you're a veteran entrepreneur looking to streamline your business processes or a developer wanting
            to extend your MCP server capabilities, this course provides the knowledge and hands-on practice you need to
            create sophisticated automation solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white mb-2">Connect to 5,000+ Apps</h3>
                <p className="text-gray-400">
                  Learn how to integrate your MCP server with thousands of applications through Zapier's extensive app
                  ecosystem.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white mb-2">Real-World Applications</h3>
                <p className="text-gray-400">
                  Explore practical use cases and real-world examples of how businesses are using MCP and Zapier
                  together.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white mb-2">Certification Included</h3>
                <p className="text-gray-400">
                  Earn a CloudDogg Zapier Integration Specialist certification upon successful completion of the course.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <BarChart className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white mb-2">Measurable Results</h3>
                <p className="text-gray-400">
                  Learn how to track and measure the impact of your automation workflows on business efficiency and ROI.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
