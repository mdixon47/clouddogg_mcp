"use client"

import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const benefits = [
  "No credit card required",
  "Free 14-day trial",
  "Unlimited automations",
  "Priority support",
  "Cancel anytime",
]

export default function ClosingCTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/30 to-gray-100/0 dark:from-blue-900/20 dark:to-gray-950/0"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div
        ref={ref}
        className={`max-w-5xl mx-auto 
          bg-gradient-to-b from-white/90 to-gray-50/90 dark:from-gray-800/50 dark:to-gray-900/50
          backdrop-blur-sm 
          border border-gray-300 dark:border-gray-700
          rounded-2xl p-8 md:p-12 relative overflow-hidden transition-all duration-1000 transform 
          ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-600 dark:from-white dark:via-blue-100 dark:to-cyan-200 bg-clip-text text-transparent">
              Start Automating Smarter, Today.
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Join hundreds of businesses already saving time and resources with CloudDogg's AI automation platform.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white/80 dark:bg-gray-800/50 rounded-full px-4 py-2 border border-gray-200 dark:border-transparent shadow-sm">
                <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-800 dark:text-gray-200">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
              Book a Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white px-8 py-6 text-lg rounded-xl"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
