"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, AlertCircle, CheckCircle } from "lucide-react"

export default function IntroductionContent() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <h1 className="text-3xl font-bold mb-6 text-white">Introduction to Zapier Integration</h1>

      <div className="space-y-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Welcome to the Zapier Integration Masterclass! In this course, you'll learn how to connect your Model Context
          Protocol (MCP) server to thousands of applications through Zapier, enabling powerful automation workflows that
          can transform your business operations.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-white">What is Zapier?</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Zapier is a web automation platform that connects over 5,000 apps and services, allowing you to automate
          workflows without writing code. It acts as a bridge between different applications, enabling them to share
          data and trigger actions based on specific events.
        </p>

        <div className="my-8">
          <div className="aspect-video rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
            <Zap className="h-16 w-16 text-purple-400 opacity-50" />
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-white font-medium">Introduction to Zapier and MCP Integration</span>
            <span className="text-gray-400 text-sm">10:24</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-white">Why Integrate MCP with Zapier?</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          The Model Context Protocol provides a powerful framework for AI models to understand and interact with
          external systems. By integrating MCP with Zapier, you can:
        </p>

        <ul className="space-y-2 pl-6 text-gray-300">
          <li className="flex items-start">
            <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0 mr-3"></div>
            <span>Extend your AI's capabilities to interact with thousands of applications</span>
          </li>
          <li className="flex items-start">
            <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0 mr-3"></div>
            <span>Create complex automation workflows triggered by AI decisions</span>
          </li>
          <li className="flex items-start">
            <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0 mr-3"></div>
            <span>Build no-code solutions for business process automation</span>
          </li>
          <li className="flex items-start">
            <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0 mr-3"></div>
            <span>Integrate with legacy systems that don't have modern APIs</span>
          </li>
          <li className="flex items-start">
            <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0 mr-3"></div>
            <span>Create custom triggers and actions for your AI to respond to and execute</span>
          </li>
        </ul>

        <Card className="bg-purple-500/10 border-purple-500/30">
          <CardContent className="p-4 flex">
            <AlertCircle className="h-6 w-6 text-purple-400 mr-3 flex-shrink-0" />
            <p className="text-purple-300">
              Throughout this course, we'll focus on practical, real-world applications of Zapier integration with MCP,
              with special attention to use cases relevant for veteran entrepreneurs and businesses.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-white">Course Structure</h2>
        <p className="text-gray-300 text-lg leading-relaxed">This course is divided into three main sections:</p>

        <ol className="space-y-4 pl-6 text-gray-300 list-decimal">
          <li className="pl-2">
            <span className="font-medium text-white">Fundamentals:</span> Understanding Zapier's core concepts,
            terminology, and how it interfaces with MCP
          </li>
          <li className="pl-2">
            <span className="font-medium text-white">Building Blocks:</span> Creating triggers, actions, searches, and
            multi-step Zaps
          </li>
          <li className="pl-2">
            <span className="font-medium text-white">Advanced Applications:</span> Complex workflows, error handling,
            monitoring, and enterprise-grade solutions
          </li>
        </ol>

        <Card className="bg-green-500/10 border-green-500/30">
          <CardContent className="p-4 flex">
            <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
            <p className="text-green-300">
              By the end of this course, you'll be able to create sophisticated automation workflows that connect your
              MCP server to any application in the Zapier ecosystem, enabling powerful AI-driven business processes.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
