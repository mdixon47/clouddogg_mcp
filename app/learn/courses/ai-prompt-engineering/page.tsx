import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CourseSidebar from "@/components/learning/course-sidebar"
import CourseContent from "@/components/learning/course-content"
import CourseInstructor from "@/components/learning/course-instructor"
import CourseReviews from "@/components/learning/course-reviews"
import RelatedCourses from "@/components/learning/related-courses"
import { aiPromptEngineering } from "@/data/courses/ai-prompt-engineering"

export const metadata: Metadata = {
  title: "AI Prompt Engineering - CloudDogg MCP Learning",
  description:
    "Master the art of crafting effective prompts to get the most out of your AI automation with CloudDogg MCP.",
}

export default function AIPromptEngineeringCoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100 dark:bg-gradient-to-b dark:from-gray-950 dark:to-gray-900 dark:text-gray-100 light:bg-gradient-to-b light:from-blue-50 light:to-white light:text-gray-800">
      <div className="relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl dark:bg-green-500/10 light:bg-green-500/5" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl dark:bg-emerald-500/10 light:bg-emerald-500/5" />

        <Header />
        <main className="pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent dark:from-green-400 dark:via-emerald-300 dark:to-teal-400 light:from-green-600 light:via-emerald-500 light:to-teal-600">
                {aiPromptEngineering.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl light:text-gray-700">{aiPromptEngineering.description}</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 mt-8">
              <div className="lg:w-2/3">
                <CourseContent courseSlug="ai-prompt-engineering" />
                <CourseInstructor slug="ai-prompt-engineering" />
                <CourseReviews slug="ai-prompt-engineering" />
              </div>
              <div className="lg:w-1/3">
                <CourseSidebar slug="ai-prompt-engineering" />
              </div>
            </div>
            <RelatedCourses slug="ai-prompt-engineering" />
          </div>
        </main>
      </div>
    </div>
  )
}
