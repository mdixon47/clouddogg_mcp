import type { Metadata } from "next"
import LessonContent from "@/components/learning/lesson-content"
import LessonNavigation from "@/components/learning/lesson-navigation"
import LessonResources from "@/components/learning/lesson-resources"

interface LessonPageProps {
  params: {
    courseSlug: string
    lessonSlug: string
  }
}

export const metadata: Metadata = {
  title: "Lesson | CloudDogg Learning",
  description: "Learn at your own pace with our comprehensive lessons.",
}

export default function LessonPage({ params: { courseSlug, lessonSlug } }: LessonPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <LessonNavigation
              courseSlug={courseSlug}
              lessonSlug={lessonSlug}
              moduleIndex={0}
              lessonIndex={0}
              totalModules={4}
              totalLessons={12}
              nextLesson={{
                title: "Next Lesson",
                slug: "next-lesson"
              }}
              prevLesson={null}
              accentColor="purple"
            />
          </div>
          <div className="lg:col-span-3">
            <LessonContent solutions={[
              {
                title: "Course Content",
                description: "Interactive lessons and exercises",
                icon: <div />
              }
            ]} />
            <LessonResources courseSlug={courseSlug} lessonSlug={lessonSlug} />
          </div>
        </div>
      </main>
    </div>
  )
}