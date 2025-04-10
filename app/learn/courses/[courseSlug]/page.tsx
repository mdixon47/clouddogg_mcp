import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LessonNavigation from "@/components/learning/lesson-navigation"
import LessonContent from "@/components/learning/lesson-content"
import LessonProgress from "@/components/learning/lesson-progress"
import LessonResources from "@/components/learning/lesson-resources"
import LessonQuiz from "@/components/learning/lesson-quiz"

export const metadata: Metadata = {
  title: "Introduction to MCP - Lesson 1 - CloudDogg Learning",
  description: "Learn the basics of Model Context Protocol and how it enables AI automation across applications.",
}

export default function LessonPage({
  params,
}: {
  params: { courseSlug: string }
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      <div className="relative overflow-hidden">
        <Header />
        <main className="pt-20 pb-20">
          <LessonNavigation courseSlug={params.courseSlug} lessonSlug="introduction" />

          <div className="px-4 md:px-8 py-8">
            <div className="max-w-5xl mx-auto">
              <LessonContent courseSlug={params.courseSlug} lessonSlug="introduction" />
              <LessonQuiz courseSlug={params.courseSlug} lessonSlug="introduction" />
              <LessonResources courseSlug={params.courseSlug} lessonSlug="introduction" />
            </div>
          </div>

          <LessonProgress courseSlug={params.courseSlug} lessonSlug="introduction" />
        </main>
        <Footer />
      </div>
    </div>
  )
}