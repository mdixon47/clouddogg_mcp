"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Medal, Rocket, Store, HeartPulse } from "lucide-react"
import Link from "next/link"

const learningPaths = [
  {
    id: "veteran-entrepreneur",
    title: "Veteran Entrepreneur",
    description: "A comprehensive path for veterans starting or growing a business with AI automation.",
    icon: Medal,
    color: "from-blue-500 to-cyan-500",
    courses: 5,
    duration: "25 hours",
    popular: true,
  },
  {
    id: "startup-founder",
    title: "Startup Founder",
    description: "Learn how to leverage MCP servers to scale your startup without scaling headcount.",
    icon: Rocket,
    color: "from-purple-500 to-pink-500",
    courses: 4,
    duration: "20 hours",
    popular: false,
  },
  {
    id: "small-business",
    title: "Small Business Owner",
    description: "Practical automation solutions for local businesses to compete with larger companies.",
    icon: Store,
    color: "from-amber-500 to-orange-500",
    courses: 3,
    duration: "15 hours",
    popular: false,
  },
  {
    id: "healthcare-provider",
    title: "Healthcare Provider",
    description: "HIPAA-compliant automation solutions for healthcare practices and providers.",
    icon: HeartPulse,
    color: "from-green-500 to-emerald-500",
    courses: 4,
    duration: "22 hours",
    popular: false,
  },
]

export default function LearningPaths() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-950/50 relative">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Learning Paths
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Structured learning journeys designed for specific career goals and business needs.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {learningPaths.map((path, index) => (
            <Card
              key={path.id}
              className={`bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden transition-all duration-700 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${path.color} flex items-center justify-center`}
                    >
                      <path.icon className="h-6 w-6 text-white" />
                    </div>
                    {path.popular && (
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{path.title}</h3>
                  <p className="text-gray-400 mb-4">{path.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 flex items-center">
                      <span className="mr-1">{path.courses}</span> Courses
                    </div>
                    <div className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 flex items-center">
                      <span className="mr-1">{path.duration}</span> Total
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-gray-800"
                          ></div>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-400">+250 enrolled</span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                      asChild
                    >
                      <Link href={`/learn/paths/${path.id}`}>
                        View Path
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
