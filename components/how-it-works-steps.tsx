"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Server, Zap, MessageCircle } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Create your MCP Server",
    description:
      "Set up your secure Model Context Protocol server in minutes. Connect to your existing tools and data sources.",
    icon: Server,
    color: "from-blue-500 to-cyan-500",
    details: [
      "Sign up for CloudDogg and create your account",
      "Choose your deployment region for optimal performance",
      "Set up authentication and security protocols",
      "Connect your existing data sources and tools",
      "Configure your MCP server settings",
    ],
  },
  {
    id: 2,
    title: "Add AI-Driven Zapier Actions",
    description: "Connect to thousands of apps through Zapier and define custom actions your AI can perform.",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    details: [
      "Connect your Zapier account to CloudDogg",
      "Select from thousands of app integrations",
      "Define custom actions for your AI to perform",
      "Set up triggers and conditions for automation",
      "Test your integrations with sample data",
    ],
  },
  {
    id: 3,
    title: "Talk to your AI – it gets it done",
    description:
      "Simply tell your AI what you need in plain language. It understands context and executes the right actions.",
    icon: MessageCircle,
    color: "from-green-500 to-emerald-500",
    details: [
      "Communicate with your AI using natural language",
      "AI understands context and intent of your requests",
      "AI selects and executes the appropriate actions",
      "Receive notifications and updates on task progress",
      "Review and refine your automation workflows",
    ],
  },
]

export default function HowItWorksSteps() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Three Simple Steps to Powerful Automation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            CloudDogg makes complex AI automation accessible to everyone with our straightforward setup process.
          </p>
        </div>

        <div ref={ref} className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row gap-8 items-center transition-all duration-1000 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`md:w-1/3 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div
                  className={`relative w-full aspect-square rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-6 overflow-hidden`}
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.color}`}></div>
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6`}
                  >
                    <step.icon className="h-10 w-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold">
                      {step.id}
                    </div>
                  </div>

                  <div className="relative z-10 font-mono text-sm text-gray-300 space-y-2">
                    <p className="text-green-400">
                      ${" "}
                      <span className="text-gray-300">
                        {step.id === 1
                          ? "clouddog init --mcp-server"
                          : step.id === 2
                            ? "clouddog connect --zapier"
                            : "clouddog agent.automate"}
                      </span>
                    </p>
                    <p className="text-gray-400">
                      {step.id === 1
                        ? "Initializing MCP server..."
                        : step.id === 2
                          ? "Connecting to Zapier..."
                          : "Processing natural language command..."}
                    </p>
                    <p className="text-gray-400">
                      {step.id === 1
                        ? "Server created successfully ✓"
                        : step.id === 2
                          ? "Connected to Zapier ✓"
                          : "Understanding context and intent..."}
                    </p>
                    {step.id === 3 && (
                      <>
                        <p className="text-blue-400">Selecting appropriate actions...</p>
                        <p className="text-blue-400">Executing workflow...</p>
                        <p className="text-gray-400">Task completed successfully ✓</p>
                      </>
                    )}
                    <p className="text-green-400 animate-pulse">$</p>
                  </div>
                </div>
              </div>

              <div className={`md:w-2/3 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Step {step.id}:
                  </span>{" "}
                  {step.title}
                </h3>
                <p className="text-xl text-gray-300 mb-6">{step.description}</p>

                <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-4 text-white">What happens in this step:</h4>
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <div
                            className={`mt-1 w-4 h-4 rounded-full bg-gradient-to-r ${step.color} flex-shrink-0`}
                          ></div>
                          <span className="ml-3 text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
