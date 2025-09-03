"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Home, HeartPulse, Store, Rocket, ChevronLeft, ChevronRight } from "lucide-react"

const useCases = [
  {
    id: "real-estate",
    title: "Real Estate",
    icon: Home,
    color: "from-blue-500 to-cyan-500",
    description:
      "Automate lead nurturing, property matching, and transaction management. CloudDogg helps agents focus on relationships while AI handles the paperwork.",
    benefits: [
      "Automated property listing updates across platforms",
      "AI-powered lead qualification and follow-up",
      "Smart scheduling for showings and open houses",
      "Document generation and transaction tracking",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,
    color: "from-green-500 to-teal-500",
    description:
      "Streamline patient communications, appointment scheduling, and administrative tasks while maintaining HIPAA compliance and data security.",
    benefits: [
      "HIPAA-compliant patient communication automation",
      "Intelligent appointment scheduling and reminders",
      "Automated insurance verification workflows",
      "Secure document processing and management",
    ],
  },
  {
    id: "local-business",
    title: "Local Businesses",
    icon: Store,
    color: "from-amber-500 to-orange-500",
    description:
      "Help small businesses compete with enterprise-level automation. From appointment booking to customer follow-ups, CloudDogg levels the playing field.",
    benefits: [
      "Customer review management and response automation",
      "Inventory tracking and reordering workflows",
      "Personalized marketing campaigns at scale",
      "Streamlined booking and reservation systems",
    ],
  },
  {
    id: "startups",
    title: "Startups",
    icon: Rocket,
    color: "from-purple-500 to-pink-500",
    description:
      "Scale operations without scaling headcount. CloudDogg helps startups automate repetitive tasks so founders can focus on growth and innovation.",
    benefits: [
      "Automated customer onboarding sequences",
      "Lead qualification and sales pipeline automation",
      "Investor updates and reporting workflows",
      "Cross-platform social media management",
    ],
  },
]

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
    <section id="use-cases" className="py-20 px-4 md:px-8 bg-gray-950/50 light:bg-gradient-to-br light:from-slate-50 light:to-blue-50/30 relative">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 light:bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 light:from-gray-900 light:to-gray-700 bg-clip-text text-transparent">
            Transforming Industries with AI Automation
          </h2>
          <p className="text-xl text-gray-400 light:text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how businesses across different sectors are using CloudDogg to revolutionize their operations.
          </p>
        </div>

        <div ref={ref} className={`transition-opacity duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 md:space-x-4 bg-gray-800/50 light:bg-white/80 light:border light:border-gray-200/60 light:shadow-lg p-2 rounded-full backdrop-blur-sm">
              {useCases.map((useCase, index) => (
                <Button
                  key={useCase.id}
                  variant={activeIndex === index ? "default" : "ghost"}
                  className={`rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? `bg-gradient-to-r ${useCase.color} text-white shadow-lg scale-105`
                      : "text-gray-400 hover:text-white light:text-gray-600 light:hover:text-gray-900 light:hover:bg-gray-100/80"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <useCase.icon className="h-4 w-4 mr-2" />
                  <span className="hidden md:inline">{useCase.title}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="relative bg-gray-800/30 light:bg-white/95 backdrop-blur-sm border border-gray-700 light:border-gray-200/60 light:shadow-xl rounded-2xl p-6 md:p-10 overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${activeCase.color}`}></div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${activeCase.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <activeCase.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white light:text-gray-900">{activeCase.title}</h3>
                <p className="text-gray-300 light:text-gray-600 mb-6 leading-relaxed">{activeCase.description}</p>

                <Button className={`bg-gradient-to-r ${activeCase.color} hover:opacity-90 hover:scale-105 text-white shadow-lg transition-all duration-300`}>
                  View {activeCase.title} Case Study
                </Button>
              </div>

              <div className="md:w-1/2 bg-gray-800/50 light:bg-gray-50/80 light:border light:border-gray-200/40 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4 text-white light:text-gray-900">Key Benefits</h4>
                <ul className="space-y-3">
                  {activeCase.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div
                        className={`mt-1 w-4 h-4 rounded-full bg-gradient-to-r ${activeCase.color} flex-shrink-0 shadow-sm`}
                      ></div>
                      <span className="ml-3 text-gray-300 light:text-gray-700 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                size="icon"
                className="border-gray-700 light:border-gray-300 text-gray-400 light:text-gray-600 hover:text-white light:hover:text-gray-900 hover:bg-gray-800 light:hover:bg-gray-100 transition-all duration-300"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-gray-700 light:border-gray-300 text-gray-400 light:text-gray-600 hover:text-white light:hover:text-gray-900 hover:bg-gray-800 light:hover:bg-gray-100 transition-all duration-300"
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
