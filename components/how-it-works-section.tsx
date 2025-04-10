"use client"

import { useInView } from "react-intersection-observer"
import { Server, Zap, MessageCircle } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Create your MCP Server",
    description:
      "Set up your secure Model Context Protocol server in minutes. Connect to your existing tools and data sources.",
    icon: Server,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Add AI-Driven Zapier Actions",
    description: "Connect to thousands of apps through Zapier and define custom actions your AI can perform.",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Talk to your AI – it gets it done",
    description:
      "Simply tell your AI what you need in plain language. It understands context and executes the right actions.",
    icon: MessageCircle,
    color: "from-green-500 to-emerald-500",
  },
]

export default function HowItWorksSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="how-it-works" className="py-20 px-4 md:px-8 relative">
      <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            How CloudDogg Works
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
            Get started in minutes with our simple three-step process.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2 opacity-30"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative transition-all duration-1000 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`relative z-10 w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <step.icon className="h-10 w-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-gray-900 dark:text-white font-bold shadow-sm">
                      {step.id}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Animated dots on the line */}
          <div className="hidden md:block">
            {inView && (
              <>
                <div className="absolute top-1/2 left-1/6 w-3 h-3 rounded-full bg-blue-500 transform -translate-y-1/2 animate-ping"></div>
                <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-purple-500 transform -translate-y-1/2 animate-ping animation-delay-300"></div>
                <div className="absolute top-1/2 left-5/6 w-3 h-3 rounded-full bg-green-500 transform -translate-y-1/2 animate-ping animation-delay-600"></div>
              </>
            )}
          </div>
        </div>

        {/* Additional explanation */}
        <div
          className={`mt-16 bg-white/90 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md transition-all duration-1000 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Powered by Zapier's Model Context Protocol
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                CloudDogg leverages Zapier's MCP to create a secure bridge between AI models and thousands of
                applications. This revolutionary protocol allows AI to understand the context of your business and
                execute complex tasks across multiple platforms.
              </p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Veteran-Owned, Enterprise-Grade Security
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                As a veteran-owned company, we understand the importance of security and reliability. CloudDogg
                implements military-grade encryption and compliance standards to ensure your data and automations are
                protected at all times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
