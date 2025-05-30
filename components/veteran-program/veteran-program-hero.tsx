"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Briefcase, Medal } from "lucide-react"
import Link from "next/link"

export default function VeteranProgramHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start">
          <div
            className={`md:w-1/2 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 mb-6 border border-blue-200 dark:border-blue-800">
              <div className="mr-2 w-4 h-4">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Exclusive Veteran Program</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 dark:from-white dark:via-blue-100 dark:to-cyan-200 bg-clip-text bg-clip-padding p-3 text-transparent mb-6">
              From Military Service
              <br />
              to Tech Success
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              A specialized program helping veteran entrepreneurs leverage
              <br />
              AI automation to build successful technology businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 dark:text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                asChild
              >
                <Link href="/veteran-program/apply">
                  Apply for Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-gray-700 dark:text-gray-300 text-gray-700 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg rounded-xl flex items-center"
                asChild
              >
                <Link href="/veteran-program/success-stories">
                  <Medal className="mr-2 h-5 w-5" />
                  Success Stories
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg rounded-xl flex items-center"
                asChild
              >
                <Link href="/veteran-program/verification-status">Check Status</Link>
              </Button>
            </div>
          </div>
          <div
            className={`md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="dark:bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-xl">
                <div className="text-blue-400 mb-4">
                  <Shield className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-white mb-2">Military Skills Transfer</h3>
                <p className="text-gray-300">
                  Learn how your military experience provides unique advantages in the tech industry.
                </p>
              </div>
              <div className="dark:bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-xl">
                <div className="text-purple-400 mb-4">
                  <Briefcase className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-white mb-2">Business Resources</h3>
                <p className="text-gray-300">
                  Access veteran-specific funding, mentorship, and networking opportunities.
                </p>
              </div>
              <div className="dark:bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-xl">
                <div className="text-amber-400 mb-4">
                  <Medal className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-white mb-2">Veteran Community</h3>
                <p className="text-gray-300">
                  Connect with fellow veteran entrepreneurs building technology businesses.
                </p>
              </div>
              <div className="dark:bg-blue-900/30 bg-blue-100 backdrop-blur-sm border border-blue-800/50 rounded-xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="dark:text-blue-300 text-blue-700 font-medium">Program Discount</span>
                  <span className="text-2xl font-bold text-gray-700 dark:text-white">50% OFF</span>
                </div>
                <p className="text-gray-300 mb-4">
                  All courses and resources are available at half price for verified veterans.
                </p>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 dark:text-white" asChild>
                  <Link href="/veteran-program/verify">Verify Status</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
