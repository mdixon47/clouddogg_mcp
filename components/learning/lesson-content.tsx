"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Server, AlertCircle, CheckCircle } from "lucide-react"

interface LessonContentProps {
  courseSlug: string
  lessonSlug: string
}

export default function LessonContent({ courseSlug, lessonSlug }: LessonContentProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // This would normally fetch lesson data based on the slugs
  const lesson = {
    title: "Introduction to MCP",
    content: [
      {
        type: "text",
        content:
          "Welcome to the Introduction to Model Context Protocol (MCP) servers. In this lesson, you'll learn the fundamental concepts behind MCP and how it enables AI automation across thousands of applications.",
      },
      {
        type: "heading",
        content: "What is Model Context Protocol?",
      },
      {
        type: "text",
        content:
          "Model Context Protocol (MCP) is a revolutionary framework developed by Zapier that enables AI models to understand and interact with external systems and data sources. It provides a standardized way for AI to understand the context of your business operations and execute actions across different applications.",
      },
      {
        type: "video",
        title: "MCP Overview",
        duration: "8:24",
      },
      {
        type: "heading",
        content: "Key Benefits for Veteran Entrepreneurs",
      },
      {
        type: "text",
        content:
          "As a veteran entrepreneur, MCP offers unique advantages that align with the skills you developed during your military service:",
      },
      {
        type: "list",
        items: [
          "Operational Efficiency: Automate repetitive tasks to focus on strategic growth",
          "Resource Optimization: Do more with less by leveraging AI automation",
          "Adaptability: Quickly adjust to changing business conditions with flexible automation",
          "Security: Military-grade security protocols to protect sensitive business data",
        ],
      },
      {
        type: "note",
        content:
          "Throughout this course, we'll highlight specific applications and benefits that are particularly relevant to veteran-owned businesses.",
      },
      {
        type: "heading",
        content: "MCP Architecture Overview",
      },
      {
        type: "text",
        content: "The MCP architecture consists of three main components:",
      },
      {
        type: "diagram",
        description:
          "A diagram showing the three main components of MCP: AI Models, MCP Server, and Application Integrations.",
      },
      {
        type: "success",
        content:
          "You've completed the introduction to MCP! In the next lesson, we'll set up your environment and prepare for hands-on exercises.",
      },
    ],
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <h1 className="text-3xl font-bold mb-6 text-white">{lesson.title}</h1>

      <div className="space-y-8">
        {lesson.content.map((block, index) => {
          switch (block.type) {
            case "text":
              return (
                <p key={index} className="text-gray-300 text-lg leading-relaxed">
                  {block.content}
                </p>
              )
            case "heading":
              return (
                <h2 key={index} className="text-2xl font-bold mt-10 mb-4 text-white">
                  {block.content}
                </h2>
              )
            case "video":
              return (
                <div key={index} className="my-8">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
                    <Server className="h-16 w-16 text-blue-400 opacity-50" />
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-white font-medium">{block.title}</span>
                    <span className="text-gray-400 text-sm">{block.duration}</span>
                  </div>
                </div>
              )
            case "list":
              return (
                <ul key={index} className="space-y-2 pl-6 text-gray-300">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mr-3"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )
            case "note":
              return (
                <Card key={index} className="bg-blue-500/10 border-blue-500/30">
                  <CardContent className="p-4 flex">
                    <AlertCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                    <p className="text-blue-300">{block.content}</p>
                  </CardContent>
                </Card>
              )
            case "diagram":
              return (
                <div key={index} className="my-8 p-6 bg-gray-800/50 border border-gray-700 rounded-xl">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center mb-2">
                    <Server className="h-16 w-16 text-blue-400 opacity-50" />
                  </div>
                  <p className="text-sm text-gray-400 text-center">{block.description}</p>
                </div>
              )
            case "success":
              return (
                <Card key={index} className="bg-green-500/10 border-green-500/30">
                  <CardContent className="p-4 flex">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                    <p className="text-green-300">{block.content}</p>
                  </CardContent>
                </Card>
              )
            default:
              return null
          }
        })}
      </div>
    </div>
  )
}
