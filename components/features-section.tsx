"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Workflow, Database, Calendar, MessageSquare, Users, Globe } from "lucide-react"

const features = [
  {
    title: "AI-Powered Workflow Automation",
    description: "Automate complex workflows across thousands of apps with natural language commands.",
    icon: Workflow,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Secure Database Integration",
    description: "Connect to Postgres and other databases with enterprise-grade security protocols.",
    icon: Database,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Natural Language Scheduling & Messaging",
    description: "Let AI handle your calendar and communications with human-like understanding.",
    icon: Calendar,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Social Media & Community Management",
    description: "Automate content creation, scheduling, and engagement across all platforms.",
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "No-Code Web Scraping",
    description: "Extract and process data from any website without writing a single line of code.",
    icon: Globe,
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Conversational AI Interface",
    description: "Talk to your AI in plain English and watch it execute complex tasks automatically.",
    icon: MessageSquare,
    color: "from-indigo-500 to-violet-500",
  },
]

export default function FeaturesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="features" className="py-20 px-4 md:px-8 relative">
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Powerful Features for Limitless Automation
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
            CloudDogg's MCP platform connects your AI to thousands of apps, enabling automation that was previously
            impossible.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`bg-white/90 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden transition-all duration-700 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
