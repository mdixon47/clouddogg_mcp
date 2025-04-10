"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Cpu, Workflow, Code } from "lucide-react"

const technicalDetails = [
  {
    title: "Model Context Protocol",
    description:
      "The Model Context Protocol (MCP) is a revolutionary framework that enables AI models to understand and interact with external systems and data sources.",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "CloudDogg implements military-grade encryption, role-based access control, and comprehensive audit logging to ensure your data and automations are secure.",
    icon: Shield,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Workflow Orchestration",
    description:
      "Our intelligent workflow engine coordinates complex sequences of actions across multiple applications, handling dependencies and error recovery.",
    icon: Workflow,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Developer API",
    description:
      "Extend CloudDogg's capabilities with our comprehensive API that allows developers to create custom integrations and automation workflows.",
    icon: Code,
    color: "from-amber-500 to-orange-500",
  },
]

export default function HowItWorksTechnical() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-950/50 relative">
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Technical Architecture
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the powerful technology behind CloudDogg's AI automation platform.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technicalDetails.map((detail, index) => (
            <Card
              key={index}
              className={`bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden transition-all duration-700 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${detail.color} flex items-center justify-center mb-4`}
                >
                  <detail.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{detail.title}</h3>
                <p className="text-gray-400">{detail.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`mt-16 transition-all duration-1000 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">How the MCP Architecture Works</h3>

              <div className="relative py-8">
                {/* Architecture diagram */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-between">
                  <div className="w-full md:w-1/4 bg-gray-800 rounded-xl p-4 text-center">
                    <h4 className="font-semibold mb-2 text-white">AI Models</h4>
                    <p className="text-sm text-gray-400">Large Language Models with specialized training</p>
                  </div>

                  <div className="hidden md:block">
                    <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 12H58M58 12L46 1M58 12L46 23" stroke="url(#paint0_linear)" strokeWidth="2" />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="0"
                          y1="12"
                          x2="58"
                          y2="12"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3B82F6" stopOpacity="0.2" />
                          <stop offset="1" stopColor="#3B82F6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="w-full md:w-1/4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-4 text-center">
                    <h4 className="font-semibold mb-2 text-white">MCP Server</h4>
                    <p className="text-sm text-gray-400">Context management and protocol handling</p>
                  </div>

                  <div className="hidden md:block">
                    <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 12H58M58 12L46 1M58 12L46 23" stroke="url(#paint0_linear)" strokeWidth="2" />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="0"
                          y1="12"
                          x2="58"
                          y2="12"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3B82F6" stopOpacity="0.2" />
                          <stop offset="1" stopColor="#3B82F6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="w-full md:w-1/4 bg-gray-800 rounded-xl p-4 text-center">
                    <h4 className="font-semibold mb-2 text-white">Zapier</h4>
                    <p className="text-sm text-gray-400">Integration with thousands of apps</p>
                  </div>
                </div>

                {/* Vertical arrows for mobile */}
                <div className="flex flex-col items-center md:hidden">
                  <svg
                    width="24"
                    height="40"
                    viewBox="0 0 24 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="my-2"
                  >
                    <path d="M12 0V38M12 38L1 26M12 38L23 26" stroke="url(#paint0_linear)" strokeWidth="2" />
                    <defs>
                      <linearGradient id="paint0_linear" x1="12" y1="0" x2="12" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3B82F6" stopOpacity="0.2" />
                        <stop offset="1" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">1. AI Model Integration</h4>
                  <p className="text-gray-300">
                    CloudDogg connects to powerful AI models that understand natural language and can interpret user
                    intent. These models are trained to understand business contexts and operational requirements.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">2. MCP Server Processing</h4>
                  <p className="text-gray-300">
                    The Model Context Protocol server acts as the central hub, maintaining context across interactions,
                    handling authentication, and translating AI outputs into actionable instructions for external
                    systems.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">3. Zapier Integration</h4>
                  <p className="text-gray-300">
                    Through Zapier, CloudDogg connects to thousands of applications, allowing the AI to perform actions
                    across your entire software ecosystem without requiring custom API integrations for each tool.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
