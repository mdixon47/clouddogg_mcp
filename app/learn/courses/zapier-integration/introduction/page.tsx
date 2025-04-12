import type { Metadata } from "next"
import LessonNavigation from "@/components/learning/lesson-navigation"
import LessonContent from "@/components/learning/zapier-course/lessons/introduction-content"
import LessonProgress from "@/components/learning/lesson-progress"
import LessonResources from "@/components/learning/zapier-course/lessons/introduction-resources"
import LessonQuiz from "@/components/learning/zapier-course/lessons/introduction-quiz"

export const metadata: Metadata = {
  title: "Introduction to Zapier Integration - CloudDogg Learning",
  description: "Learn the basics of integrating your MCP server with Zapier to connect with thousands of applications.",
}

export default async function IntroductionLessonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      <div className="relative overflow-hidden">
        
        <main className="pt-20 pb-20">
          <LessonNavigation courseSlug="zapier-integration" lessonSlug="introduction" />

          <div className="px-4 md:px-8 py-8">
            <div className="max-w-5xl mx-auto">
              <LessonContent />
              <LessonQuiz />
              <LessonResources />
            </div>
          </div>

          <LessonProgress courseSlug="zapier-integration" lessonSlug="introduction" />
        </main>
      </div>
    </div>
  )
}
