"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, Server, Code, Lightbulb } from "lucide-react"

export default function ZapierCourseRequirements() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`mb-12 transition-all duration-1000 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <h2 className="text-2xl font-bold mb-6 text-white">Prerequisites & Requirements</h2>

      <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden">
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start">
              <Server className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-white mb-1">Basic MCP Knowledge</h3>
                <p className="text-gray-300">
                  You should have a basic understanding of Model Context Protocol (MCP) servers. We recommend completing
                  the "MCP Server Fundamentals" course before enrolling in this masterclass.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Code className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-white mb-1">Technical Requirements</h3>
                <p className="text-gray-300">
                  A Zapier account (free tier is sufficient for the course exercises), access to an MCP server
                  (CloudDogg provides a sandbox environment for practice), and basic familiarity with APIs and web
                  services.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Lightbulb className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-white mb-1">No Coding Required</h3>
                <p className="text-gray-300">
                  While some basic understanding of programming concepts is helpful, no specific coding skills are
                  required. The course focuses on no-code/low-code approaches to integration.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg flex">
              <AlertCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-white mb-1">Note for Veterans</h3>
                <p className="text-gray-300">
                  If you're a veteran entrepreneur, you'll receive additional support materials and access to
                  veteran-specific Q&A sessions. Make sure to verify your veteran status in your profile to access these
                  resources.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
