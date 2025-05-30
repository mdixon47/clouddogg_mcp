"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Medal } from "lucide-react"
import Link from "next/link"
import { resources } from "@/data/veteran-resources"

export default function VeteranResources() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-500 dark:bg-blue-900/50 dark:text-blue-300">
              <Medal className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Veteran-Exclusive</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Veteran Entrepreneur Resources
            </h2>
            <p className="text-xl text-gray-400 max-w-xl">
              Exclusive resources and support for veterans building technology businesses with AI automation.
            </p>
          </div>
          <div className="md:w-1/3">
            <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Veteran Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mt-1 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0"></div>
                    <span className="ml-3 text-gray-300">50% discount on all courses</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0"></div>
                    <span className="ml-3 text-gray-300">Priority support from veteran staff</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0"></div>
                    <span className="ml-3 text-gray-300">Exclusive networking events</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0"></div>
                    <span className="ml-3 text-gray-300">Free business consultation</span>
                  </li>
                </ul>
                <Button
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white"
                  asChild
                >
                  <Link href="/learn/veteran-entrepreneurs">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className={`bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden transition-all duration-700 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${resource.color} flex items-center justify-center mb-4`}
                >
                  <resource.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{resource.title}</h3>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  asChild
                >
                  <Link href={resource.link}>Access Resource</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
