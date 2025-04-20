import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import LessonNavigation from "@/components/learning/lesson-navigation"
import LessonProgress from "@/components/learning/lesson-progress"
import VeteranSecurityLandscapeContent from "@/components/learning/security-compliance-course/lessons/veteran-security-landscape-content"
import VeteranSecurityLandscapeResources from "@/components/learning/security-compliance-course/lessons/veteran-security-landscape-resources"

export const metadata: Metadata = {
  title: "The Veteran Business Security Landscape | Security & Compliance for Veterans",
  description: "Overview of security challenges and opportunities for veteran-owned businesses",
}

export default function VeteranBusinessSecurityLandscapePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 light:from-gray-50 light:to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/learn/courses/security-compliance-veterans" passHref>
            <Button
              variant="ghost"
              className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 light:text-purple-600 light:hover:text-purple-700 light:hover:bg-purple-100"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Course
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <LessonNavigation
              courseSlug="security-compliance-veterans"
              lessonSlug="veteran-business-security-landscape"
              moduleIndex={0}
              lessonIndex={0}
              totalModules={4}
              totalLessons={12}
              nextLesson={{
                title: "Military Experience in Cybersecurity",
                slug: "military-experience-in-cybersecurity"
              }}
              prevLesson={null}
              accentColor="purple"
            />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-gray-800/30 rounded-lg p-8 mb-8 light:bg-white light:shadow-md">
              <h1 className="text-3xl font-bold mb-4 text-white light:text-gray-800">
                The Veteran Business Security Landscape
              </h1>

              <div className="flex items-center mb-6">
                <div className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm mr-4 light:bg-purple-100 light:text-purple-700">
                  Module 1 • Lesson 1
                </div>
                <div className="text-gray-400 text-sm light:text-gray-600">30 minutes</div>
              </div>

              <VeteranSecurityLandscapeContent />

              <div className="mt-8 flex justify-between">
                <div></div>
                <Link
                  href="/learn/courses/security-compliance-veterans/lessons/military-experience-in-cybersecurity"
                  passHref
                >
                  <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                    Next Lesson
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-800/30 rounded-lg p-6 light:bg-white light:shadow-md">
                <h2 className="text-xl font-bold mb-4 text-white light:text-gray-800">Additional Resources</h2>
                <VeteranSecurityLandscapeResources />
              </div>

              <div className="bg-gray-800/30 rounded-lg p-6 light:bg-white light:shadow-md">
                <h2 className="text-xl font-bold mb-4 text-white light:text-gray-800">Your Progress</h2>
                <LessonProgress
                  courseSlug="security-compliance-veterans"
                  lessonSlug="veteran-business-security-landscape"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}