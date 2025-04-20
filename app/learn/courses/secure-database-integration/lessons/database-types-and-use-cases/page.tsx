import type { Metadata } from "next"
import LessonContent from "@/components/learning/lesson-content"
import LessonNavigation from "@/components/learning/lesson-navigation"
import LessonProgress from "@/components/learning/lesson-progress"
import LessonResources from "@/components/learning/lesson-resources"
import { secureDatabaseIntegration } from "@/data/courses/secure-database-integration"


export const metadata: Metadata = {
  title: "Database Types and Use Cases | Secure Database Integration",
  description: "Learn about different database types and their appropriate use cases for MCP servers.",
}

export default function DatabaseTypesLessonPage() {
  const courseSlug = "secure-database-integration"
  const currentModule = secureDatabaseIntegration.modules[0]
  const currentLesson = currentModule.lessons[0]

  const nextLesson = {
    title: "MCP Database Connectors",
    slug: "mcp-database-connectors",
  }

  const prevLesson = null // This is the first lesson

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <h1 className="text-3xl font-bold mb-6 text-white light:text-gray-800">{currentLesson.title}</h1>

          <LessonProgress
           courseSlug={courseSlug} lessonSlug="database-types-and-use-cases"
          />

           <LessonContent courseSlug={courseSlug} lessonSlug="database-types-and-use-cases" />

            <LessonNavigation courseSlug={courseSlug} lessonSlug="database-types-and-use-cases" />
        </div>

        <div className="lg:col-span-1">
          <LessonResources courseSlug={courseSlug} lessonSlug="database-types-and-use-cases">
          </LessonResources>
        </div>
      </div>
    </div>
  )
}
