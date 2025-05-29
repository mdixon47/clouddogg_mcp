"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className={`md:w-1/2 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 dark:from-white dark:via-blue-100 dark:to-cyan-200 bg-clip-text bg-clip-padding p-3 text-transparent mb-6">
              Connect Your AI to Everything. Automate Anything.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              One secure MCP server. Thousands of automations. Unlimited potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
                Book a Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white px-8 py-6 text-lg rounded-xl flex items-center"
              >
                <Play className="mr-2 h-5 w-5" />
                See It in Action
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-white dark:border-gray-900"
                  ></div>
                ))}
              </div>
              <p className="ml-4 text-gray-600 dark:text-gray-400">
                <span className="text-gray-900 dark:text-white font-medium">500+</span> businesses automated
              </p>
            </div>
          </div>
          <div
            className={`md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white/90 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-600 dark:text-gray-400">CloudDogg MCP Terminal</div>
                </div>
                <div className="font-mono text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <p className="text-green-600 dark:text-green-400">
                    $ <span className="text-gray-700 dark:text-gray-300">connect --mcp zapier</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">Connecting to Zapier MCP server...</p>
                  <p className="text-gray-600 dark:text-gray-400">Connection established ✓</p>
                  <p className="text-green-600 dark:text-green-400">
                    $ <span className="text-gray-700 dark:text-gray-300">agent.create --name "SalesAssistant"</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">Creating AI agent...</p>
                  <p className="text-gray-600 dark:text-gray-400">Agent created successfully ✓</p>
                  <p className="text-green-600 dark:text-green-400">
                    ${" "}
                    <span className="text-gray-700 dark:text-gray-300">
                      agent.automate "Schedule a meeting with new leads from our CRM and send personalized follow-ups"
                    </span>
                  </p>
                  <p className="text-blue-600 dark:text-blue-400">Creating automation workflow...</p>
                  <p className="text-blue-600 dark:text-blue-400">Connecting to CRM...</p>
                  <p className="text-blue-600 dark:text-blue-400">Setting up calendar integration...</p>
                  <p className="text-blue-600 dark:text-blue-400">Configuring email templates...</p>
                  <p className="text-gray-600 dark:text-gray-400">Automation deployed successfully ✓</p>
                  <p className="text-green-600 dark:text-green-400 animate-pulse">$</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
