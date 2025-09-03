"use client"

import { useEffect, useState } from "react"
import { Shield, CheckCircle, Clock, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VeteranVerificationHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const benefits = [
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "50% discount on all courses"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      text: "Access to veteran-only content"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      text: "Priority support"
    }
  ]

  return (
    <section className="pt-32 pb-16 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div
            className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/50 text-blue-300 mb-6">
              <Shield className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">Secure Verification Process</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Verify Your
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Veteran Status
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get instant access to exclusive veteran benefits, discounts, and specialized courses. 
              Quick, secure, and confidential verification process.
            </p>

            {/* Benefits List */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-300 bg-gray-800/30 px-4 py-2 rounded-full border border-gray-700"
                >
                  <span className="text-green-400">{benefit.icon}</span>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  document.getElementById('verification-form')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
              >
                Start Verification
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg"
                onClick={() => {
                  document.getElementById('verification-info')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-green-400" />
              <span className="text-sm">256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-400" />
              <span className="text-sm">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-purple-400" />
              <span className="text-sm">ID.me Partnership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
