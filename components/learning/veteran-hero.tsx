"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Medal, Shield, Briefcase } from "lucide-react"
import Link from "next/link"

export default function VeteranHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className={`md:w-1/2 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 mb-6">
              <Medal className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Exclusive Veteran Program</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-normal bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-6 pb-2">
              From Military Service to Tech Success
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              A specialized program helping veteran entrepreneurs leverage AI automation to build successful technology
              businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <Link href="/learn/veteran-entrepreneurs/apply">
                  Apply for Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg rounded-xl flex items-center"
                asChild
              >
                <Link href="/learn/veteran-entrepreneurs/success-stories">
                  <Medal className="mr-2 h-5 w-5" />
                  Success Stories
                </Link>
              </Button>
            </div>
          </div>
          <div
            className={`md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-xl">
                <Shield className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Military Skills Transfer</h3>
                <p className="text-gray-300">
                  Learn how your military experience provides unique advantages in the tech industry.
                </p>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-xl">
                <Briefcase className="h-10 w-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Business Resources</h3>
                <p className="text-gray-300">
                  Access veteran-specific funding, mentorship, and networking opportunities.
                </p>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-xl">
                <Medal className="h-10 w-10 text-amber-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Veteran Community</h3>
                <p className="text-gray-300">
                  Connect with fellow veteran entrepreneurs building technology businesses.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-300 font-medium">Program Discount</span>
                  <span className="text-2xl font-bold text-white">50% OFF</span>
                </div>
                <p className="text-gray-300 mb-4">
                  All courses and resources are available at half price for verified veterans.
                </p>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white"
                  asChild
                >
                  <Link href="/learn/veteran-entrepreneurs/verify">Verify Status</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

