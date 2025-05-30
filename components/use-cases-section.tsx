"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { useCases } from "@/data/mcp-use-cases"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function UseCasesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === useCases.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? useCases.length - 1 : prev - 1))
  }

  const activeCase = useCases[activeIndex]

  return (
    <section id="use-cases" className="py-20 px-4 md:px-8 bg-gray-950/50 relative">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text bg-clip-padding p-3 text-transparent">
            Transforming Industries with AI Automation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how businesses across different sectors are using CloudDogg to revolutionize their operations.
          </p>
        </div>

        <div ref={ref} className={`transition-opacity duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 md:space-x-4 bg-gray-800/50 p-2 rounded-full">
              {useCases.map((useCase, index) => (
                <Button
                  key={useCase.id}
                  variant={activeIndex === index ? "default" : "ghost"}
                  className={`rounded-full ${
                    activeIndex === index
                      ? `bg-gradient-to-r ${useCase.color} text-white`
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <useCase.icon className="h-4 w-4 mr-2" />
                  <span className="hidden md:inline">{useCase.title}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-10 overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${activeCase.color}`}></div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${activeCase.color} flex items-center justify-center mb-6`}
                >
                  <activeCase.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{activeCase.title}</h3>
                <p className="text-gray-300 mb-6">{activeCase.description}</p>

                <Button className={`bg-gradient-to-r ${activeCase.color} hover:opacity-90 text-white`}>
                  View {activeCase.title} Case Study
                </Button>
              </div>

              <div className="md:w-1/2 bg-gray-800/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4 text-white">Key Benefits</h4>
                <ul className="space-y-3">
                  {activeCase.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div
                        className={`mt-1 w-4 h-4 rounded-full bg-gradient-to-r ${activeCase.color} flex-shrink-0`}
                      ></div>
                      <span className="ml-3 text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                size="icon"
                className="border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800"
                onClick={nextSlide}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
